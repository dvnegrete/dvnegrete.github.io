import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { C as CONSTANTS, d as defineCustomElement$2 } from './calendar-single2.js';
import { d as defineCustomElement$3 } from './calendar-double2.js';
import { d as defineCustomElement$1 } from './header-calendar2.js';

const doubleCalendarContainerCss = ":host{padding:0;margin:0;box-sizing:border-box;font-size:0.9rem;font-family:var(--font-light, 'InterStateL', sans-serif);color:var(--font-color, rgb(50, 50, 50))}.container{background-color:var(--backgroud-color,rgb(255, 255, 255));border-radius:4px;box-shadow:0px 6px 18px 0px rgba(0, 45 , 114, 0.15);position:absolute;max-width:700px;max-height:400px;padding:2%;display:grid;grid-template-columns:1fr 4fr 2fr;grid-template-rows:2fr auto 2fr;grid-template-areas:'header header header'\n  'calendar calendar period'\n  'now days button'}.hidden{display:none}.type-selection{grid-area:header;display:flex;justify-content:space-evenly;align-items:center;border-bottom:1px solid var(--inactive-color, rgb(179,179,179));padding-bottom:4px}.type-selection label{padding:7px;display:flex;align-items:flex-start;cursor:pointer}.calendar{grid-area:calendar}.button-continue{grid-area:button;align-self:center;justify-self:center;background-color:var(--primary-color, #056dae);border:none;border-radius:6px;color:var(--inactive-color, rgb(179, 179, 179));font-weight:normal;padding:8px}.completed{cursor:pointer;color:var(--backgroud-color, rgb(255, 255, 255))}.period-list{grid-area:period;display:flex;flex-direction:column;align-items:center;justify-content:space-between;font-size:0.75rem;padding:15% 0 15% 4%}.period-list img{rotate:270deg;height:17px;width:20px;padding:5px 0;cursor:pointer}.period-list img:last-child{rotate:90deg}.period-list form{border-left:1px solid var(--inactive-color, rgb(179,179,179));padding-left:7%}.period-list form label{padding:6% 0;cursor:pointer;display:flex}.disabled{opacity:0.3;cursor:default}.period-list form input{margin:0;margin-right:3px;vertical-align:middle}.period-list .selected-period{border:solid 1.5px var(--secondary-color, #0075c0);border-radius:50%}.counter-days{grid-area:days;margin:auto}.go-today{grid-area:now;color:var(--secondary-color, #0075c0);background:none;font-size:0.75rem;padding:7px;font-weight:600;border:solid 1px;border-radius:6px;justify-self:center;align-self:center;cursor:pointer}@media (min-width: 150px) and (max-width: 520px){.container{left:0;max-width:max-content;max-height:max-content;padding:2%;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr auto auto auto 1fr;grid-template-areas:'header header'\n    'calendar calendar'\n    'period period'\n    'now days'\n    'button button'}.type-selection{flex-flow:wrap;justify-content:space-around}.type-selection label{align-items:center;padding:2%}.period-list{border-bottom:1px solid var(--inactive-color, rgb(179,179,179));border-top:1px solid var(--inactive-color, rgb(179,179,179));flex-direction:row;justify-content:space-around;height:50%;overflow:hidden;padding:1% 5px}.period-list form{border:none;padding:0}.period-list form label{flex-direction:row;padding:5% 0}.period-list img{rotate:180deg;padding:20px}.period-list img:last-child{rotate:none}.counter-days{margin:none;padding:6% 0;text-align:center}.button-continue{margin-top:3%}}@media (min-width: 521px) and (max-width: 790px){.container{left:5vw}}";

const DoubleCalendarContainer = /*@__PURE__*/ proxyCustomElement(class DoubleCalendarContainer extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.showDate = createEvent(this, "dvn-arrayDatesSelected", 7);
    this.closeDoubleCalendar = createEvent(this, "dvn-closeDoubleCalendar", 7);
    this.changeCleanPeriod = createEvent(this, "dvn-changeCleanPeriod", 7);
    this.cleanCalendarSelection = createEvent(this, "dvn-cleanCalendarSelection", 7);
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
  get el() { return this; }
  static get style() { return doubleCalendarContainerCss; }
}, [1, "double-calendar-container", {
    "assignDate": [32],
    "dateForPeriods": [32],
    "arrayPeriods": [32],
    "countDaysSelected": [32],
    "buttonContinue": [32],
    "typeSelection": [32]
  }, [[0, "dvn-applicationDate", "applicationDate"], [0, "dvn-rangeDate", "handlerRangeDate"], [0, "dvn-calendarDoubleSetDate", "handlerCalendarDobleSetDate"], [0, "dvn-previousMonthCalendar", "handlerChangeMonthCalendar"], [0, "dvn-nextMonthCalendar", "handlerChangeMonthCalendar"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["double-calendar-container", "calendar-double", "calendar-single", "header-calendar"];
  components.forEach(tagName => { switch (tagName) {
    case "double-calendar-container":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DoubleCalendarContainer);
      }
      break;
    case "calendar-double":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "calendar-single":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "header-calendar":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { DoubleCalendarContainer as D, defineCustomElement as d };

//# sourceMappingURL=double-calendar-container2.js.map