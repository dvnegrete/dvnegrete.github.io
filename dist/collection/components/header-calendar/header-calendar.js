import { h } from "@stencil/core";
export class HeaderCalendar {
  constructor() {
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
  static get is() { return "header-calendar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["header-calendar.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["header-calendar.css"]
    };
  }
  static get properties() {
    return {
      "nameMonth": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "name-month",
        "reflect": false
      },
      "year": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "year",
        "reflect": false
      },
      "nameInactive": {
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
        "attribute": "name-inactive",
        "reflect": false,
        "defaultValue": "false"
      },
      "position": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'left' | 'right'",
          "resolved": "\"left\" | \"right\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "position",
        "reflect": false,
        "defaultValue": "null"
      },
      "twoArrow": {
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
        "attribute": "two-arrow",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get events() {
    return [{
        "method": "nextMonthCalendar",
        "name": "dvn-nextMonthCalendar",
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
        "method": "previousMonthCalendar",
        "name": "dvn-previousMonthCalendar",
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
}
//# sourceMappingURL=header-calendar.js.map
