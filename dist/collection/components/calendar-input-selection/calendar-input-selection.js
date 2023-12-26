import { Host, h } from "@stencil/core";
export class CalendarInputSelection {
  constructor() {
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
  static get is() { return "calendar-input-selection"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["calendar-input-selection.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["calendar-input-selection.css"]
    };
  }
  static get states() {
    return {
      "placeholder": {},
      "showCalendarDouble": {}
    };
  }
  static get listeners() {
    return [{
        "name": "dvn-arrayDatesSelected",
        "method": "handlerDatesSelected",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "dvn-closeDoubleCalendar",
        "method": "handlerCloseDoubleCalendar",
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
//# sourceMappingURL=calendar-input-selection.js.map
