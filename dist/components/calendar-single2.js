import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './header-calendar2.js';

var PositionRange;
(function (PositionRange) {
  PositionRange[PositionRange["number"] = 0] = "number";
  PositionRange["lastDay"] = "lastDay";
  PositionRange["firstDay"] = "firstDay";
  PositionRange["all"] = "all";
})(PositionRange || (PositionRange = {}));

const CONSTANTS = {
  'es-MX': {
    daynames: [
      'Do',
      'Lu',
      'Ma',
      'Mi',
      'Ju',
      'Vi',
      'Sa',
    ],
    monthNames: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre'
    ],
  }
};

const calendarSingleCss = ":host{padding:0;margin:0;box-sizing:border-box;display:flex;padding:7% 2%;font-size:0.9rem}.container-calendar{min-width:170px}.day-names{display:grid;grid-template-columns:repeat(7, 1fr);justify-items:center;margin:3% 0;font-size:0.75rem}.day-names span{padding:0 3px}.inactive{opacity:0.5}.days-in-month{list-style:none;display:grid;grid-template-columns:repeat(7, 1fr);padding:0;margin:0;color:var(--inactive-color, rgb(179,179,179));background-color:transparent}.days-in-month li{margin:3px 0;padding:3px 0;text-align:center;font-size:0.7rem}.days-in-month li:nth-child(7n+1){border-radius:25px 0 0 25px}.days-in-month li:nth-child(7n+7){border-radius:0 25px 25px 0}.days-in-month li.disabled{color:transparent;letter-spacing:-0.8px;cursor:default;font-weight:normal;margin:3px 0;padding:1px 0}.days-in-month .selected{background-color:var(--secondary-color, #0075c0);color:var(--backgroud-color, rgb(255, 255, 255))}li.selected:nth-child(7n+1),li.selected:nth-child(7n+7){border-radius:50%}.in-range{color:var(--font-color, rgb(50, 50, 50));cursor:pointer;border-radius:50%}.is-now{border:solid 1px var(--secondary-color, #0075c0);width:21px;border-radius:50%}.days-in-month .inside-the-range{background-color:var(--tertiary-color, #def6ff);border-radius:0px;color:var(--secondary-color, #0075c0)}li.is-now:nth-child(7n+1),li.is-now:nth-child(7n+7){border-radius:25px}@media (min-width: 321px) and (max-width: 520px){:host{padding:2% 0}}@media (min-width: 150px) and (max-width: 320px){:host{padding:2% 0;font-size:0.7rem}.container-calendar{min-width:125px}.day-names{font-size:0.65rem}.days-in-month li{font-size:0.65rem}}";

const CalendarSingle = /*@__PURE__*/ proxyCustomElement(class CalendarSingle extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.valueCalendarSelected = createEvent(this, "dvn-valueCalendarSelected", 7);
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
  static get watchers() { return {
    "typeSelection": ["handlerTypeSelection"],
    "calendarActive": ["handlerWatchProp"],
    "setCalendar": ["setCalendarChange"]
  }; }
  static get style() { return calendarSingleCss; }
}, [1, "calendar-single", {
    "setCalendar": [1040],
    "dateCalendar": [16],
    "numberCalendar": [1, "number-calendar"],
    "positionRange": [1040],
    "typeSelection": [1, "type-selection"],
    "calendarActive": [4, "calendar-active"],
    "valueCalendar": [32],
    "daysInMonth": [32],
    "sendFromThisCalendar": [32]
  }, [[8, "dvn-changeCleanPeriod", "handlerChangeCleanPeriod"], [8, "dvn-cleanCalendarSelection", "handlerCleanCalendarSelection"]], {
    "typeSelection": ["handlerTypeSelection"],
    "calendarActive": ["handlerWatchProp"],
    "setCalendar": ["setCalendarChange"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calendar-single", "header-calendar"];
  components.forEach(tagName => { switch (tagName) {
    case "calendar-single":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CalendarSingle);
      }
      break;
    case "header-calendar":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { CONSTANTS as C, PositionRange as P, CalendarSingle as a, defineCustomElement as d };

//# sourceMappingURL=calendar-single2.js.map