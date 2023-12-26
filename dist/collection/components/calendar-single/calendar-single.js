import { h } from "@stencil/core";
import { PositionRange } from "../../utils/enum/positionRange";
import { CONSTANTS } from "../shared/constants";
export class CalendarSingle {
  constructor() {
    this.dayNames = CONSTANTS['es-MX'].daynames;
    this.monthNames = CONSTANTS['es-MX'].monthNames;
    this.totalDaysInTheMonth = null;
    this.baseNameMonth = this.monthNames[this.setCalendar.month];
    this.setCalendar = { month: 11, year: 2023, day: 19 };
    this.dateCalendar = undefined;
    this.numberCalendar = null;
    this.positionRange = null;
    this.typeSelection = 'oneDay';
    this.valueCalendar = undefined;
    this.daysInMonth = undefined;
    this.sendFromThisCalendar = null;
    this.calendarActive = null;
  }
  handlerTypeSelection(newType, oldType) {
    if (newType !== oldType) {
      this.daysInMonthRender();
    }
  }
  handlerWatchProp() {
    this.daysInMonthRender();
  }
  setCalendarChange(newValue, oldValue) {
    if (newValue !== oldValue) {
      this.daysInMonth = this.writeMonth();
    }
  }
  handlerChangeCleanPeriod() {
    this.positionRange = null;
  }
  handlerCleanCalendarSelection() {
    this.positionRange = null;
  }
  startDay(date) {
    const start = new Date(date.year, date.month, date.day);
    return start.getDay();
  }
  monthOfThirtyOneDays(month) {
    return (month === 0 ||
      month === 2 ||
      month === 4 ||
      month === 6 ||
      month === 7 ||
      month === 9 ||
      month === 11);
  }
  monthOfThirtyDays(month) {
    return (month === 3 ||
      month === 5 ||
      month === 8 ||
      month === 10);
  }
  isLeap(year) {
    return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
  }
  getTotalDays(date) {
    if (date.month === -1) {
      date.month = 11;
    }
    if (this.monthOfThirtyOneDays(date.month)) {
      return 31;
    }
    else if (this.monthOfThirtyDays(date.month)) {
      return 30;
    }
    else {
      return this.isLeap(date.year) ? 29 : 28;
    }
  }
  writeMonth() {
    let content = [];
    this.valueCalendar = this.setCalendar;
    for (let i = this.startDay(this.valueCalendar); i > 0; i--) {
      content.push(0);
    }
    this.baseNameMonth = this.monthNames[this.valueCalendar.month];
    this.totalDaysInTheMonth = this.getTotalDays(this.valueCalendar);
    this.year = String(this.setCalendar.year);
    for (let i = 1; i <= this.totalDaysInTheMonth; i++) {
      content.push(i);
    }
    return content;
  }
  componentWillLoad() {
    this.daysInMonth = this.writeMonth();
  }
  dayCalendarIsNow(day) {
    const now = new Date();
    const monthNow = now.getMonth();
    const dayNow = now.getDate();
    if (!this.setCalendar || this.setCalendar.month === undefined) {
      return false;
    }
    return this.setCalendar.month === monthNow && day === dayNow;
  }
  /*
  **  Desarrollar lógica para limite deseado usando: verifyLimit(day:number)
  */
  verifyLimit() {
    if (this.calendarActive || this.typeSelection === 'period' && Array.isArray(this.positionRange)) {
      return true;
    }
    return false;
  }
  daySelectedHandler(day) {
    const isInsideLimit = this.verifyLimit();
    if (isInsideLimit) {
      const selectedDate = {
        day,
        month: this.setCalendar.month,
        year: this.setCalendar.year
      };
      const objEmit = {
        name: this.numberCalendar,
        date: selectedDate
      };
      this.sendFromThisCalendar = selectedDate;
      this.valueCalendarSelected.emit(objEmit);
    }
  }
  validateOneDay() {
    return this.typeSelection === 'oneDay' && Array.isArray(this.positionRange);
  }
  validateRange() {
    return this.typeSelection === 'range' && Array.isArray(this.positionRange);
  }
  validateTwoPositionsOfRange(day) {
    return day > Number(this.positionRange[0]) && day < Number(this.positionRange[1]);
  }
  validatePeriod() {
    return this.typeSelection === 'period' && Array.isArray(this.positionRange) && this.positionRange.includes(PositionRange.all);
  }
  nameClassToElement(day) {
    const classInRange = this.verifyLimit() ? 'in-range' : '';
    const classIsNow = this.dayCalendarIsNow(day) ? 'is-now' : '';
    let classSelected = '';
    let classInsideTheRange = '';
    let classAllMonth = '';
    if (this.validateOneDay()) {
      classSelected = this.positionRange.some(dayParam => dayParam === day) ? 'selected' : '';
    }
    else if (this.validateRange()) {
      classSelected = this.positionRange.some(dayParam => dayParam === day) ? 'selected' : '';
      if (this.positionRange.includes(PositionRange.firstDay)) {
        classInsideTheRange = day < Number(this.positionRange[1]) ? 'inside-the-range' : '';
      }
      else if (this.positionRange.includes(PositionRange.lastDay)) {
        classInsideTheRange = day > Number(this.positionRange[0]) ? 'inside-the-range' : '';
      }
      else if (this.positionRange.length === 2) {
        this.positionRange.sort((a, b) => Number(a) - Number(b));
        classInsideTheRange = this.validateTwoPositionsOfRange(day) ? 'inside-the-range' : '';
      }
    }
    else if (this.validatePeriod()) {
      classAllMonth = (day === 1 || day === this.totalDaysInTheMonth) ? 'selected' : 'inside-the-range';
    }
    const combinedClass = [classInRange, classInsideTheRange, classSelected, classAllMonth, classIsNow].filter(Boolean).join(' ');
    return combinedClass;
  }
  daysInMonthRender() {
    return this.daysInMonth.map(day => {
      const combinedClass = this.nameClassToElement(day);
      if (day === 0) {
        return h("li", { class: 'disabled' }, day);
      }
      else {
        return (h("li", { class: combinedClass, onClick: () => this.daySelectedHandler(day) }, day));
      }
    });
  }
  render() {
    return (h("div", { class: 'container-calendar' }, h("header-calendar", { "name-month": this.baseNameMonth, year: this.year, position: this.numberCalendar === 'main' ? 'right' : 'left', "name-inactive": !this.calendarActive }), h("div", { class: this.calendarActive ? 'day-names' : 'day-names inactive' }, this.dayNames.map(dayname => {
      return (h("span", null, dayname));
    })), h("ol", { class: 'days-in-month' }, this.daysInMonthRender())));
  }
  static get is() { return "calendar-single"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["calendar-single.css", "./../../utils/assets/fontawesome-free-6.4.2-web/css/all.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["calendar-single.css", "../../utils/assets/fontawesome-free-6.4.2-web/css/all.css"]
    };
  }
  static get properties() {
    return {
      "setCalendar": {
        "type": "unknown",
        "mutable": true,
        "complexType": {
          "original": "CalendarEntry",
          "resolved": "CalendarEntry",
          "references": {
            "CalendarEntry": {
              "location": "import",
              "path": "../../utils/interfaces/calendarEntry",
              "id": "src/utils/interfaces/calendarEntry.ts::CalendarEntry"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "defaultValue": "{month:11, year:2023, day:19}"
      },
      "dateCalendar": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "CalendarEntry",
          "resolved": "CalendarEntry",
          "references": {
            "CalendarEntry": {
              "location": "import",
              "path": "../../utils/interfaces/calendarEntry",
              "id": "src/utils/interfaces/calendarEntry.ts::CalendarEntry"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        }
      },
      "numberCalendar": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'main' | 'secondary'",
          "resolved": "\"main\" | \"secondary\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "number-calendar",
        "reflect": false,
        "defaultValue": "null"
      },
      "positionRange": {
        "type": "unknown",
        "mutable": true,
        "complexType": {
          "original": "PositionRange[]",
          "resolved": "PositionRange[]",
          "references": {
            "PositionRange": {
              "location": "import",
              "path": "../../utils/enum/positionRange",
              "id": "src/utils/enum/positionRange.ts::PositionRange"
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
      },
      "calendarActive": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "calendar-active",
        "reflect": false,
        "defaultValue": "null"
      }
    };
  }
  static get states() {
    return {
      "valueCalendar": {},
      "daysInMonth": {},
      "sendFromThisCalendar": {}
    };
  }
  static get events() {
    return [{
        "method": "valueCalendarSelected",
        "name": "dvn-valueCalendarSelected",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get watchers() {
    return [{
        "propName": "typeSelection",
        "methodName": "handlerTypeSelection"
      }, {
        "propName": "calendarActive",
        "methodName": "handlerWatchProp"
      }, {
        "propName": "setCalendar",
        "methodName": "setCalendarChange"
      }];
  }
  static get listeners() {
    return [{
        "name": "dvn-changeCleanPeriod",
        "method": "handlerChangeCleanPeriod",
        "target": "window",
        "capture": false,
        "passive": false
      }, {
        "name": "dvn-cleanCalendarSelection",
        "method": "handlerCleanCalendarSelection",
        "target": "window",
        "capture": false,
        "passive": false
      }];
  }
}
//# sourceMappingURL=calendar-single.js.map
