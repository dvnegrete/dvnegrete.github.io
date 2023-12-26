import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-68dfe401.js';

var PositionRange;
(function (PositionRange) {
  PositionRange[PositionRange["number"] = 0] = "number";
  PositionRange["lastDay"] = "lastDay";
  PositionRange["firstDay"] = "firstDay";
  PositionRange["all"] = "all";
})(PositionRange || (PositionRange = {}));

const calendarDoubleCss = ":host{padding:0;margin:0;box-sizing:border-box;display:flex;justify-content:space-evenly;color:var(--font-color, rgb(50, 50, 50));background:var(--backgroud-color, rgb(255, 255, 255))}";

const CalendarDouble = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calendarDoubleSetDate = createEvent(this, "dvn-calendarDoubleSetDate", 7);
    this.applicationDate = createEvent(this, "dvn-applicationDate", 7);
    this.rangeDate = createEvent(this, "dvn-rangeDate", 7);
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
  static get watchers() { return {
    "mainDateReceived": ["handlerChangeDateReceived"],
    "typeSelection": ["handlerTypeSelection"]
  }; }
};
CalendarDouble.style = calendarDoubleCss;

const calendarInputSelectionCss = ":host{padding:0;margin:0;box-sizing:border-box}.select-date{cursor:pointer;border-radius:3px;background:var(--backgroud-color, rgb(255, 255, 255));border:1px solid var(--border-color, rgb(204, 204, 204));height:32px;max-width:225px;display:flex;justify-content:space-between;align-items:center;width:100%}.hidden{display:none}.day-selectet-text{color:var(--font-color, rgb(50, 50, 50));font-size:0.8rem;font-family:var(--fontlight, 'InterStateL', sans-serif);font-weight:300;letter-spacing:0;line-height:16px;padding-left:7px}.box{width:30px;height:100%;background-color:var(--backgroud-color, rgb(255, 255, 255));border:1px solid var(--border-color, rgb(204, 204, 204));border-right:none;border-radius:0 2px 2px 0;display:flex;justify-content:center;align-items:center}.box-selected{background-color:var(--secondary-color, #0075c0)}";

const CalendarInputSelection = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
CalendarInputSelection.style = calendarInputSelectionCss;

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

const CalendarSingle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
CalendarSingle.style = calendarSingleCss;

const doubleCalendarContainerCss = ":host{padding:0;margin:0;box-sizing:border-box;font-size:0.9rem;font-family:var(--font-light, 'InterStateL', sans-serif);color:var(--font-color, rgb(50, 50, 50))}.container{background-color:var(--backgroud-color,rgb(255, 255, 255));border-radius:4px;box-shadow:0px 6px 18px 0px rgba(0, 45 , 114, 0.15);position:absolute;max-width:700px;max-height:400px;padding:2%;display:grid;grid-template-columns:1fr 4fr 2fr;grid-template-rows:2fr auto 2fr;grid-template-areas:'header header header'\n  'calendar calendar period'\n  'now days button'}.hidden{display:none}.type-selection{grid-area:header;display:flex;justify-content:space-evenly;align-items:center;border-bottom:1px solid var(--inactive-color, rgb(179,179,179));padding-bottom:4px}.type-selection label{padding:7px;display:flex;align-items:flex-start;cursor:pointer}.calendar{grid-area:calendar}.button-continue{grid-area:button;align-self:center;justify-self:center;background-color:var(--primary-color, #056dae);border:none;border-radius:6px;color:var(--inactive-color, rgb(179, 179, 179));font-weight:normal;padding:8px}.completed{cursor:pointer;color:var(--backgroud-color, rgb(255, 255, 255))}.period-list{grid-area:period;display:flex;flex-direction:column;align-items:center;justify-content:space-between;font-size:0.75rem;padding:15% 0 15% 4%}.period-list img{rotate:270deg;height:17px;width:20px;padding:5px 0;cursor:pointer}.period-list img:last-child{rotate:90deg}.period-list form{border-left:1px solid var(--inactive-color, rgb(179,179,179));padding-left:7%}.period-list form label{padding:6% 0;cursor:pointer;display:flex}.disabled{opacity:0.3;cursor:default}.period-list form input{margin:0;margin-right:3px;vertical-align:middle}.period-list .selected-period{border:solid 1.5px var(--secondary-color, #0075c0);border-radius:50%}.counter-days{grid-area:days;margin:auto}.go-today{grid-area:now;color:var(--secondary-color, #0075c0);background:none;font-size:0.75rem;padding:7px;font-weight:600;border:solid 1px;border-radius:6px;justify-self:center;align-self:center;cursor:pointer}@media (min-width: 150px) and (max-width: 520px){.container{left:0;max-width:max-content;max-height:max-content;padding:2%;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr auto auto auto 1fr;grid-template-areas:'header header'\n    'calendar calendar'\n    'period period'\n    'now days'\n    'button button'}.type-selection{flex-flow:wrap;justify-content:space-around}.type-selection label{align-items:center;padding:2%}.period-list{border-bottom:1px solid var(--inactive-color, rgb(179,179,179));border-top:1px solid var(--inactive-color, rgb(179,179,179));flex-direction:row;justify-content:space-around;height:50%;overflow:hidden;padding:1% 5px}.period-list form{border:none;padding:0}.period-list form label{flex-direction:row;padding:5% 0}.period-list img{rotate:180deg;padding:20px}.period-list img:last-child{rotate:none}.counter-days{margin:none;padding:6% 0;text-align:center}.button-continue{margin-top:3%}}@media (min-width: 521px) and (max-width: 790px){.container{left:5vw}}";

const DoubleCalendarContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get el() { return getElement(this); }
};
DoubleCalendarContainer.style = doubleCalendarContainerCss;

const headerCalendarCss = ":host{padding:0;margin:0;box-sizing:border-box}header{display:flex;align-items:center;justify-content:space-between;padding:3% 0}span{min-width:fit-content}.button-next{background:transparent;border:none;cursor:pointer}.button-next img{height:15px;padding:0 3px}.empty{width:18px}.inactive{color:var(--inactive-color, rgb(179,179,179))}.hidden{width:15px}.hidden img{display:none}";

const HeaderCalendar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
HeaderCalendar.style = headerCalendarCss;

export { CalendarDouble as calendar_double, CalendarInputSelection as calendar_input_selection, CalendarSingle as calendar_single, DoubleCalendarContainer as double_calendar_container, HeaderCalendar as header_calendar };

//# sourceMappingURL=calendar-double_5.entry.js.map