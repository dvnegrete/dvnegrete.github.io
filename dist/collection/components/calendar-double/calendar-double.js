import { Host, h } from "@stencil/core";
import { PositionRange } from "../../utils/enum/positionRange";
export class CalendarDouble {
  constructor() {
    this.firstDayForRange = null;
    this.lastDayForRange = null;
    this.daySelectedInMain = false;
    this.daySelectedInSecondary = false;
    this.datesInMain = [];
    this.datesInSecondary = [];
    this.typeSelectionMain = 'oneDay';
    this.typeSelectionSecondary = 'oneDay';
    this.setCalendarMain = this.getDateNow();
    this.setCalendarSecond = this.getDateNow();
    this.calendarActive = true;
    this.rangeMain = [];
    this.positionRangeMain = null;
    this.positionRangeSecondary = null;
    this.mainDateReceived = null;
    this.typeSelection = 'oneDay';
  }
  handlerChangeDateReceived() {
    this.setCalendarMain = this.getDateNow();
    this.setDateCalendarSecond();
    this.positionRangeMain = [PositionRange.all];
  }
  handlerTypeSelection(newType, oldType) {
    if (newType !== oldType) {
      this.typeSelectionMain = this.typeSelection;
      this.typeSelectionSecondary = this.typeSelection === 'period' ? 'range' : this.typeSelection;
      this.calendarActive = this.typeSelection !== 'period';
      this.cleanPreviousSelection();
    }
  }
  previousMonthCalendarEvent() {
    this.cleanPreviousSelection();
    this.setCalendarMain = {
      day: this.setCalendarSecond.day,
      month: this.setCalendarSecond.month,
      year: this.setCalendarSecond.year
    };
    this.setDate();
  }
  nextMonthCalendarEvent() {
    this.cleanPreviousSelection();
    this.setCalendarMain = {
      day: this.setCalendarMain.day,
      month: this.setCalendarMain.month + 1,
      year: this.setCalendarMain.year
    };
    if (this.setCalendarMain.month === 12) {
      this.setCalendarMain.month = 0;
      this.setCalendarMain.year = this.setCalendarMain.year + 1;
    }
    this.setDate();
  }
  calendarSingleDaySelected(event) {
    this.assignValuePositionOneDay(event);
    if (this.typeSelection === 'oneDay') {
      this.setForOneDay(event);
      this.applicationDate.emit(event.detail.date);
    }
    else if (this.typeSelection === 'range') {
      this.addDateOnSelectedCalendar(event.detail.date);
      if (this.firstDayForRange === null) {
        this.assignValueFromSelectedRange(event);
        this.firstDayForRange = event.detail.date;
      }
      else if (this.lastDayForRange === null) {
        this.lastDayForRange = event.detail.date;
        this.assignValueFromSelectedRange(event);
        this.rangeDate.emit([this.firstDayForRange, this.lastDayForRange]);
      }
      else {
        this.cleanPreviousSelection();
        this.firstDayForRange = event.detail.date;
        this.assignValueFromSelectedRange(event);
      }
    }
  }
  assignValuePositionOneDay(event) {
    if (event.detail.name === 'main') {
      this.daySelectedInMain = true;
    }
    if (event.detail.name === 'secondary') {
      this.daySelectedInSecondary = true;
    }
  }
  setForOneDay(event) {
    this.cleanPreviousSelection();
    this.positionRangeMain = event.detail.name === 'main' ? [event.detail.date.day] : null;
    this.positionRangeSecondary = event.detail.name === 'secondary' ? [event.detail.date.day] : null;
  }
  addDateOnSelectedCalendar(date) {
    if (this.daySelectedInMain) {
      this.datesInMain.push(date);
    }
    if (this.daySelectedInSecondary) {
      this.datesInSecondary.push(date);
    }
  }
  cleanDatesInMain() {
    while (this.datesInMain.length > 0) {
      this.datesInMain.pop();
    }
  }
  cleanDatesInSecondary() {
    while (this.datesInSecondary.length > 0) {
      this.datesInSecondary.pop();
    }
  }
  assignValueFromSelectedRange(event) {
    if (event.detail.name === 'main') {
      this.positionRangeMain =
        this.firstDayForRange === null
          ? [event.detail.date.day]
          : this.setRangeOfDaysInASingleCalendar(event);
    }
    else if (event.detail.name === 'secondary') {
      this.positionRangeSecondary =
        this.firstDayForRange === null
          ? [event.detail.date.day]
          : this.setRangeOfDaysInASingleCalendar(event);
    }
  }
  setRangeOfDaysInASingleCalendar(event) {
    if (event.detail.date.month === this.firstDayForRange.month) {
      return [this.firstDayForRange.day, event.detail.date.day];
    }
    else {
      return this.setRangeDayOnBothCalendars(event);
    }
  }
  setRangeDayOnBothCalendars(event) {
    this.sortRangeSelection();
    if (event.detail.name === 'main') {
      this.positionRangeSecondary = [this.firstDayForRange.day, PositionRange.lastDay];
      return [PositionRange.firstDay, this.lastDayForRange.day];
    }
    else if (event.detail.name === 'secondary') {
      this.positionRangeMain = [PositionRange.firstDay, this.lastDayForRange.day];
      return [this.firstDayForRange.day, PositionRange.lastDay];
    }
  }
  sortRangeSelection() {
    const sortRange = [this.firstDayForRange, this.lastDayForRange];
    sortRange.sort((a, b) => {
      if (a.year !== b.year) {
        return a.year - b.year;
      }
      if (a.month !== b.month) {
        return a.month - b.month;
      }
      return a.day - b.day;
    });
    this.firstDayForRange = sortRange[0];
    this.lastDayForRange = sortRange[1];
  }
  cleanPreviousSelection() {
    this.firstDayForRange = null;
    this.lastDayForRange = null;
    this.positionRangeMain = null;
    this.positionRangeSecondary = null;
    this.cleanDatesInMain();
    this.cleanDatesInSecondary();
  }
  getDateNow() {
    const dateNow = this.mainDateReceived || new Date();
    return {
      day: 1,
      month: dateNow.getMonth(),
      year: dateNow.getFullYear(),
    };
  }
  setDateCalendarSecond() {
    this.setCalendarSecond = {
      day: 1,
      month: this.setCalendarMain.month - 1,
      year: this.setCalendarMain.year
    };
    if (this.setCalendarSecond.month === -1) {
      this.setCalendarSecond.month = 11;
      this.setCalendarSecond.year = --this.setCalendarSecond.year;
    }
  }
  setDate() {
    this.setDateCalendarSecond();
    this.calendarDoubleSetDate.emit(this.setCalendarMain);
  }
  componentWillLoad() {
    this.setCalendarMain = this.getDateNow();
    this.setDate();
  }
  render() {
    return (h(Host, null, h("calendar-single", { typeSelection: this.typeSelectionSecondary, numberCalendar: 'secondary', calendarActive: this.calendarActive, setCalendar: this.setCalendarSecond, positionRange: this.positionRangeSecondary }), h("calendar-single", { typeSelection: this.typeSelectionMain, numberCalendar: 'main', calendarActive: this.calendarActive, setCalendar: this.setCalendarMain, positionRange: this.positionRangeMain })));
  }
  static get is() { return "calendar-double"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["calendar-double.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["calendar-double.css"]
    };
  }
  static get properties() {
    return {
      "mainDateReceived": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "Date",
          "resolved": "Date",
          "references": {
            "Date": {
              "location": "global",
              "id": "global::Date"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "defaultValue": "null"
      },
      "typeSelection": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'oneDay' | 'range' | 'period'",
          "resolved": "\"oneDay\" | \"period\" | \"range\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "type-selection",
        "reflect": false,
        "defaultValue": "'oneDay'"
      }
    };
  }
  static get states() {
    return {
      "typeSelectionMain": {},
      "typeSelectionSecondary": {},
      "setCalendarMain": {},
      "setCalendarSecond": {},
      "calendarActive": {},
      "rangeMain": {},
      "positionRangeMain": {},
      "positionRangeSecondary": {}
    };
  }
  static get events() {
    return [{
        "method": "calendarDoubleSetDate",
        "name": "dvn-calendarDoubleSetDate",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "CalendarEntry",
          "resolved": "CalendarEntry",
          "references": {
            "CalendarEntry": {
              "location": "import",
              "path": "./../../utils/interfaces/calendarEntry",
              "id": "src/utils/interfaces/calendarEntry.ts::CalendarEntry"
            }
          }
        }
      }, {
        "method": "applicationDate",
        "name": "dvn-applicationDate",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "CalendarEntry",
          "resolved": "CalendarEntry",
          "references": {
            "CalendarEntry": {
              "location": "import",
              "path": "./../../utils/interfaces/calendarEntry",
              "id": "src/utils/interfaces/calendarEntry.ts::CalendarEntry"
            }
          }
        }
      }, {
        "method": "rangeDate",
        "name": "dvn-rangeDate",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "CalendarEntry[]",
          "resolved": "CalendarEntry[]",
          "references": {
            "CalendarEntry": {
              "location": "import",
              "path": "./../../utils/interfaces/calendarEntry",
              "id": "src/utils/interfaces/calendarEntry.ts::CalendarEntry"
            }
          }
        }
      }];
  }
  static get watchers() {
    return [{
        "propName": "mainDateReceived",
        "methodName": "handlerChangeDateReceived"
      }, {
        "propName": "typeSelection",
        "methodName": "handlerTypeSelection"
      }];
  }
  static get listeners() {
    return [{
        "name": "dvn-previousMonthCalendar",
        "method": "previousMonthCalendarEvent",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "dvn-nextMonthCalendar",
        "method": "nextMonthCalendarEvent",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "dvn-valueCalendarSelected",
        "method": "calendarSingleDaySelected",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
//# sourceMappingURL=calendar-double.js.map
