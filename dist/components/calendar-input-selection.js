import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$5 } from './calendar-double2.js';
import { d as defineCustomElement$4 } from './calendar-single2.js';
import { d as defineCustomElement$3 } from './double-calendar-container2.js';
import { d as defineCustomElement$2 } from './header-calendar2.js';

const calendarInputSelectionCss = ":host{padding:0;margin:0;box-sizing:border-box}.select-date{cursor:pointer;border-radius:3px;background:var(--backgroud-color, rgb(255, 255, 255));border:1px solid var(--border-color, rgb(204, 204, 204));height:32px;max-width:225px;display:flex;justify-content:space-between;align-items:center;width:100%}.hidden{display:none}.day-selectet-text{color:var(--font-color, rgb(50, 50, 50));font-size:0.8rem;font-family:var(--fontlight, 'InterStateL', sans-serif);font-weight:300;letter-spacing:0;line-height:16px;padding-left:7px}.box{width:30px;height:100%;background-color:var(--backgroud-color, rgb(255, 255, 255));border:1px solid var(--border-color, rgb(204, 204, 204));border-right:none;border-radius:0 2px 2px 0;display:flex;justify-content:center;align-items:center}.box-selected{background-color:var(--secondary-color, #0075c0)}";

const CalendarInputSelection$1 = /*@__PURE__*/ proxyCustomElement(class CalendarInputSelection extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.defaultPlaceholder = 'Selecciona una fecha';
    this.placeholder = 'Selecciona una fecha';
    this.showCalendarDouble = false;
  }
  handlerDatesSelected(event) {
    if (Array.isArray(event.detail)) {
      this.legendPlaceHolder(event.detail);
    }
    else {
      this.placeholder = this.defaultPlaceholder;
    }
  }
  handlerCloseDoubleCalendar(event) {
    this.showCalendarDouble = !event.detail;
  }
  handlerChangeMonthCalendar() {
    this.placeholder = this.defaultPlaceholder;
  }
  legendPlaceHolder(array) {
    const oneDate = array[0];
    if (array.length === 1) {
      this.placeholder = `${oneDate.getDate()}/${oneDate.getMonth() + 1}/${oneDate.getFullYear()}`;
    }
    else if (array.length === 2) {
      const twoDate = array[1];
      const first = `${oneDate.getDate()}/${oneDate.getMonth() + 1}/${oneDate.getFullYear()}`;
      const last = `${twoDate.getDate()}/${twoDate.getMonth() + 1}/${twoDate.getFullYear()}`;
      this.placeholder = `${first} al ${last}`;
    }
    else if (array.length === 3) {
      this.placeholder = array[2];
    }
  }
  handleClick() {
    this.showCalendarDouble = !this.showCalendarDouble;
  }
  render() {
    return (h(Host, null, h("div", { class: 'select-date', onClick: () => this.handleClick() }, h("p", { class: 'day-selectet-text' }, this.placeholder), h("div", { class: this.showCalendarDouble ? 'box box-selected' : 'box' }, h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12", viewBox: "0 0 448 512" }, h("path", { d: "M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" })))), h("double-calendar-container", { class: !this.showCalendarDouble ? 'hidden' : '' })));
  }
  static get style() { return calendarInputSelectionCss; }
}, [1, "calendar-input-selection", {
    "placeholder": [32],
    "showCalendarDouble": [32]
  }, [[0, "dvn-arrayDatesSelected", "handlerDatesSelected"], [0, "dvn-closeDoubleCalendar", "handlerCloseDoubleCalendar"], [0, "dvn-previousMonthCalendar", "handlerChangeMonthCalendar"], [0, "dvn-nextMonthCalendar", "handlerChangeMonthCalendar"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calendar-input-selection", "calendar-double", "calendar-single", "double-calendar-container", "header-calendar"];
  components.forEach(tagName => { switch (tagName) {
    case "calendar-input-selection":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CalendarInputSelection$1);
      }
      break;
    case "calendar-double":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "calendar-single":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "double-calendar-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "header-calendar":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const CalendarInputSelection = CalendarInputSelection$1;
const defineCustomElement = defineCustomElement$1;

export { CalendarInputSelection, defineCustomElement };

//# sourceMappingURL=calendar-input-selection.js.map