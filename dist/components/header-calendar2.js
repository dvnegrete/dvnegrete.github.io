import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const headerCalendarCss = ":host{padding:0;margin:0;box-sizing:border-box}header{display:flex;align-items:center;justify-content:space-between;padding:3% 0}span{min-width:fit-content}.button-next{background:transparent;border:none;cursor:pointer}.button-next img{height:15px;padding:0 3px}.empty{width:18px}.inactive{color:var(--inactive-color, rgb(179,179,179))}.hidden{width:15px}.hidden img{display:none}";

const HeaderCalendar = /*@__PURE__*/ proxyCustomElement(class HeaderCalendar extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.nextMonthCalendar = createEvent(this, "dvn-nextMonthCalendar", 7);
    this.previousMonthCalendar = createEvent(this, "dvn-previousMonthCalendar", 7);
    this.nameMonth = undefined;
    this.year = undefined;
    this.nameInactive = false;
    this.position = null;
    this.twoArrow = false;
  }
  render() {
    return (h("header", null, this.twoArrow || this.position === 'left' ?
      h("div", { class: this.nameInactive ? 'button-next hidden' : 'button-next', onClick: () => this.previousMonthCalendar.emit() }, h("img", { src: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/left-chevron.svg", alt: "atras" }))
      : h("div", { class: 'empty' }), h("span", { class: this.nameInactive ? 'inactive' : '' }, this.nameMonth, " ", this.year), this.twoArrow || this.position === 'right' ?
      h("div", { class: this.nameInactive ? 'button-next hidden' : 'button-next', onClick: () => this.nextMonthCalendar.emit() }, h("img", { src: "https://github-personal-dvn.s3.us-east-2.amazonaws.com/img/right-chevron.svg", alt: "siguiente" }))
      : h("div", { class: 'empty' })));
  }
  static get style() { return headerCalendarCss; }
}, [1, "header-calendar", {
    "nameMonth": [1, "name-month"],
    "year": [1],
    "nameInactive": [4, "name-inactive"],
    "position": [1],
    "twoArrow": [4, "two-arrow"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["header-calendar"];
  components.forEach(tagName => { switch (tagName) {
    case "header-calendar":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, HeaderCalendar);
      }
      break;
  } });
}

export { HeaderCalendar as H, defineCustomElement as d };

//# sourceMappingURL=header-calendar2.js.map