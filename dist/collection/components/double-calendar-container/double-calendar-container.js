import { Host, h } from "@stencil/core";
import { CONSTANTS } from "../shared/constants";
export class DoubleCalendarContainer {
  constructor() {
    this.numberOfPeriods = 5;
    this.monthNames = CONSTANTS['es-MX'].monthNames;
    this.assignDate = new Date();
    this.dateForPeriods = new Date();
    this.arrayPeriods = [];
    this.countDaysSelected = 0;
    this.buttonContinue = false;
    this.typeSelection = 'oneDay';
  }
  applicationDate(event) {
    this.countDaysSelected = 1;
    const date = this.convertCalendarEntryOnDate(event.detail);
    this.showDate.emit([date]);
    this.buttonContinue = true;
  }
  handlerRangeDate(event) {
    const firstSelection = this.convertCalendarEntryOnDate(event.detail[0]);
    const lastSelection = this.convertCalendarEntryOnDate(event.detail[1]);
    this.countSelectedDays(firstSelection, lastSelection);
    this.showDate.emit([firstSelection, lastSelection]);
    this.buttonContinue = true;
  }
  handlerCalendarDobleSetDate(event) {
    const setNewDate = event.detail;
    this.assignDate = new Date(setNewDate.year, setNewDate.month, setNewDate.day);
  }
  handlerChangeMonthCalendar() {
    this.countDaysSelected = 0;
    this.buttonContinue = false;
  }
  convertCalendarEntryOnDate(date) {
    return new Date(date.year, date.month, date.day);
  }
  countSelectedDays(firstSelection, lastSelection) {
    const diffInMls = lastSelection.getTime() - firstSelection.getTime();
    const diffInDays = diffInMls / (1000 * 60 * 60 * 24);
    this.countDaysSelected = Math.abs(diffInDays) + 1;
  }
  calculateLastDayOfMonth(year, month) {
    const firstDayOfNextMonth = new Date(year, month + 1, 1);
    const lastDayOfMonth = new Date(firstDayOfNextMonth.getTime() - 1);
    const daysInMonth = lastDayOfMonth.getDate();
    return daysInMonth;
  }
  handlerForTypeSelection(type) {
    this.cleanPeriodsPreview();
    this.countDaysSelected = 0;
    this.typeSelection = type;
    this.showDate.emit();
    this.buttonContinue = false;
  }
  cleanPeriodsPreview() {
    const allPeriods = this.el.shadowRoot.querySelectorAll('.period-list label');
    const periods = Array.from(allPeriods);
    for (const label of periods) {
      if (label.classList.contains('selected-period')) {
        label.classList.remove('selected-period');
      }
      const input = label.children[0];
      input.checked = false;
    }
  }
  markPeriodInLabel(e, date) {
    if (this.typeSelection === 'period') {
      this.cleanPeriodsPreview();
      const input = e.target;
      input.checked = true;
      const label = input.parentElement;
      label.classList.add('selected-period');
      this.assignDate = new Date(date.year, date.month, date.day);
      const lastDayMonth = this.calculateLastDayOfMonth(date.year, date.month);
      const firstDate = this.convertCalendarEntryOnDate({ day: 1, month: date.month, year: date.year });
      const lastDay = this.convertCalendarEntryOnDate({ day: lastDayMonth, month: date.month, year: date.year });
      this.countSelectedDays(firstDate, lastDay);
      const stringPeriod = `${CONSTANTS['es-MX'].monthNames[firstDate.getMonth()]} ${firstDate.getFullYear()}`;
      this.showDate.emit([firstDate, lastDay, stringPeriod]);
      this.buttonContinue = true;
    }
  }
  buildPeriods() {
    const periods = [];
    const dateReference = new Date(this.dateForPeriods.getFullYear(), this.dateForPeriods.getMonth() - 2, this.dateForPeriods.getDate());
    for (let i = 0; i < this.numberOfPeriods; i++) {
      const nextMonth = new Date(dateReference);
      nextMonth.setMonth(dateReference.getMonth() + i);
      const dateCalendar = {
        day: nextMonth.getDate(),
        month: nextMonth.getMonth(),
        year: nextMonth.getFullYear()
      };
      periods.push(dateCalendar);
    }
    return periods;
  }
  changePeriod(value) {
    if (this.typeSelection === 'period') {
      this.cleanPeriodsPreview();
      this.changeCleanPeriod.emit();
      this.dateForPeriods = new Date(this.dateForPeriods.setMonth(this.dateForPeriods.getMonth() + value));
      this.buttonContinue = false;
    }
  }
  goToToday() {
    this.handlerForTypeSelection('oneDay');
    const nodeInput = this.el.shadowRoot.querySelector('#forDay');
    nodeInput.checked = true;
    this.assignDate = new Date();
    this.dateForPeriods = new Date();
    this.showDate.emit();
    this.cleanCalendarSelection.emit();
  }
  renderForm() {
    return this.buildPeriods().map(date => {
      return (h("label", { htmlFor: `period${this.monthNames[date.month]}${date.year}` }, h("input", { type: "radio", name: "period", id: `period${this.monthNames[date.month]}${date.year}`, value: this.monthNames[date.month] + '-' + date.year, onChange: (event) => this.markPeriodInLabel(event, date), ref: ele => {
          if (ele) {
            ele.disabled = this.typeSelection !== 'period';
          }
        } }), this.monthNames[date.month] + ' ' + date.year));
    });
  }
  render() {
    return (h(Host, null, h("div", { class: 'container' }, h("form", { class: 'type-selection' }, h("label", { htmlFor: "forDay" }, h("input", { type: "radio", name: 'typeSelection', id: 'forDay', onInput: () => this.handlerForTypeSelection('oneDay'), defaultChecked: true }), "Por d\u00EDa"), h("label", { htmlFor: "forRange" }, h("input", { type: "radio", name: 'typeSelection', id: 'forRange', onInput: () => this.handlerForTypeSelection('range') }), "Por rango de d\u00EDas"), h("label", { htmlFor: "forPeriod" }, h("input", { type: "radio", name: 'typeSelection', id: 'forPeriod', onInput: () => this.handlerForTypeSelection('period') }), "Por periodo")), h("calendar-double", { class: 'calendar', typeSelection: this.typeSelection, mainDateReceived: this.assignDate }), h("div", { class: this.typeSelection === 'period' ? 'period-list' : 'period-list disabled' }, h("img", { src: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/right-chevron.svg", alt: "anterior", onClick: () => this.changePeriod(-1) }), h("form", null, this.renderForm()), h("img", { src: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/right-chevron.svg", alt: "siguiente", onClick: () => this.changePeriod(1) })), h("p", { class: 'counter-days' }, "Dias seleccionados: ", h("span", null, this.countDaysSelected)), h("button", { class: 'go-today', onClick: () => this.goToToday() }, "Ir a hoy"), h("button", { class: this.buttonContinue ? 'button-continue completed' : 'button-continue', onClick: () => this.closeDoubleCalendar.emit(this.buttonContinue) }, "Continuar"))));
  }
  static get is() { return "double-calendar-container"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["double-calendar-container.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["double-calendar-container.css"]
    };
  }
  static get states() {
    return {
      "assignDate": {},
      "dateForPeriods": {},
      "arrayPeriods": {},
      "countDaysSelected": {},
      "buttonContinue": {},
      "typeSelection": {}
    };
  }
  static get events() {
    return [{
        "method": "showDate",
        "name": "dvn-arrayDatesSelected",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "Array<Date | string>",
          "resolved": "(string | Date)[]",
          "references": {
            "Array": {
              "location": "global",
              "id": "global::Array"
            },
            "Date": {
              "location": "global",
              "id": "global::Date"
            }
          }
        }
      }, {
        "method": "closeDoubleCalendar",
        "name": "dvn-closeDoubleCalendar",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        }
      }, {
        "method": "changeCleanPeriod",
        "name": "dvn-changeCleanPeriod",
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
      }, {
        "method": "cleanCalendarSelection",
        "name": "dvn-cleanCalendarSelection",
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
  static get elementRef() { return "el"; }
  static get listeners() {
    return [{
        "name": "dvn-applicationDate",
        "method": "applicationDate",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "dvn-rangeDate",
        "method": "handlerRangeDate",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "dvn-calendarDoubleSetDate",
        "method": "handlerCalendarDobleSetDate",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "dvn-previousMonthCalendar",
        "method": "handlerChangeMonthCalendar",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "dvn-nextMonthCalendar",
        "method": "handlerChangeMonthCalendar",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
//# sourceMappingURL=double-calendar-container.js.map
