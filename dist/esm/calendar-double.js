import { p as promiseResolve, b as bootstrapLazy } from './index-68dfe401.js';
export { s as setNonce } from './index-68dfe401.js';

/*
 Stencil Client Patch Browser v4.7.2 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["calendar-double_5",[[1,"calendar-input-selection",{"placeholder":[32],"showCalendarDouble":[32]},[[0,"dvn-arrayDatesSelected","handlerDatesSelected"],[0,"dvn-closeDoubleCalendar","handlerCloseDoubleCalendar"],[0,"dvn-previousMonthCalendar","handlerChangeMonthCalendar"],[0,"dvn-nextMonthCalendar","handlerChangeMonthCalendar"]]],[1,"double-calendar-container",{"assignDate":[32],"dateForPeriods":[32],"arrayPeriods":[32],"countDaysSelected":[32],"buttonContinue":[32],"typeSelection":[32]},[[0,"dvn-applicationDate","applicationDate"],[0,"dvn-rangeDate","handlerRangeDate"],[0,"dvn-calendarDoubleSetDate","handlerCalendarDobleSetDate"],[0,"dvn-previousMonthCalendar","handlerChangeMonthCalendar"],[0,"dvn-nextMonthCalendar","handlerChangeMonthCalendar"]]],[1,"calendar-double",{"mainDateReceived":[16],"typeSelection":[1,"type-selection"],"typeSelectionMain":[32],"typeSelectionSecondary":[32],"setCalendarMain":[32],"setCalendarSecond":[32],"calendarActive":[32],"rangeMain":[32],"positionRangeMain":[32],"positionRangeSecondary":[32]},[[0,"dvn-previousMonthCalendar","previousMonthCalendarEvent"],[0,"dvn-nextMonthCalendar","nextMonthCalendarEvent"],[0,"dvn-valueCalendarSelected","calendarSingleDaySelected"]],{"mainDateReceived":["handlerChangeDateReceived"],"typeSelection":["handlerTypeSelection"]}],[1,"calendar-single",{"setCalendar":[1040],"dateCalendar":[16],"numberCalendar":[1,"number-calendar"],"positionRange":[1040],"typeSelection":[1,"type-selection"],"calendarActive":[4,"calendar-active"],"valueCalendar":[32],"daysInMonth":[32],"sendFromThisCalendar":[32]},[[8,"dvn-changeCleanPeriod","handlerChangeCleanPeriod"],[8,"dvn-cleanCalendarSelection","handlerCleanCalendarSelection"]],{"typeSelection":["handlerTypeSelection"],"calendarActive":["handlerWatchProp"],"setCalendar":["setCalendarChange"]}],[1,"header-calendar",{"nameMonth":[1,"name-month"],"year":[1],"nameInactive":[4,"name-inactive"],"position":[1],"twoArrow":[4,"two-arrow"]}]]]], options);
});

//# sourceMappingURL=calendar-double.js.map