/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
import { CalendarEntry } from "./utils/interfaces/calendarEntry";
import { PositionRange } from "./utils/enum/positionRange";
export { CalendarEntry } from "./utils/interfaces/calendarEntry";
export { PositionRange } from "./utils/enum/positionRange";
export namespace Components {
    interface CalendarDouble {
        "mainDateReceived": Date;
        "typeSelection": 'oneDay' | 'range' | 'period';
    }
    interface CalendarInputSelection {
    }
    interface CalendarSingle {
        "calendarActive": boolean;
        "dateCalendar": CalendarEntry;
        "numberCalendar": 'main' | 'secondary';
        "positionRange": PositionRange[];
        "setCalendar": CalendarEntry;
        "typeSelection": 'oneDay' | 'range' | 'period';
    }
    interface DoubleCalendarContainer {
    }
    interface HeaderCalendar {
        "nameInactive": boolean;
        "nameMonth": string;
        "position": 'left' | 'right';
        "twoArrow": boolean;
        "year": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
export interface CalendarDoubleCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCalendarDoubleElement;
}
export interface CalendarSingleCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCalendarSingleElement;
}
export interface DoubleCalendarContainerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLDoubleCalendarContainerElement;
}
export interface HeaderCalendarCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLHeaderCalendarElement;
}
declare global {
    interface HTMLCalendarDoubleElementEventMap {
        "dvn-calendarDoubleSetDate": CalendarEntry;
        "dvn-applicationDate": CalendarEntry;
        "dvn-rangeDate": CalendarEntry[];
    }
    interface HTMLCalendarDoubleElement extends Components.CalendarDouble, HTMLStencilElement {
        addEventListener<K extends keyof HTMLCalendarDoubleElementEventMap>(type: K, listener: (this: HTMLCalendarDoubleElement, ev: CalendarDoubleCustomEvent<HTMLCalendarDoubleElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLCalendarDoubleElementEventMap>(type: K, listener: (this: HTMLCalendarDoubleElement, ev: CalendarDoubleCustomEvent<HTMLCalendarDoubleElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLCalendarDoubleElement: {
        prototype: HTMLCalendarDoubleElement;
        new (): HTMLCalendarDoubleElement;
    };
    interface HTMLCalendarInputSelectionElement extends Components.CalendarInputSelection, HTMLStencilElement {
    }
    var HTMLCalendarInputSelectionElement: {
        prototype: HTMLCalendarInputSelectionElement;
        new (): HTMLCalendarInputSelectionElement;
    };
    interface HTMLCalendarSingleElementEventMap {
        "dvn-valueCalendarSelected": any;
    }
    interface HTMLCalendarSingleElement extends Components.CalendarSingle, HTMLStencilElement {
        addEventListener<K extends keyof HTMLCalendarSingleElementEventMap>(type: K, listener: (this: HTMLCalendarSingleElement, ev: CalendarSingleCustomEvent<HTMLCalendarSingleElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLCalendarSingleElementEventMap>(type: K, listener: (this: HTMLCalendarSingleElement, ev: CalendarSingleCustomEvent<HTMLCalendarSingleElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLCalendarSingleElement: {
        prototype: HTMLCalendarSingleElement;
        new (): HTMLCalendarSingleElement;
    };
    interface HTMLDoubleCalendarContainerElementEventMap {
        "dvn-arrayDatesSelected": Array<Date | string>;
        "dvn-closeDoubleCalendar": boolean;
        "dvn-changeCleanPeriod": any;
        "dvn-cleanCalendarSelection": any;
    }
    interface HTMLDoubleCalendarContainerElement extends Components.DoubleCalendarContainer, HTMLStencilElement {
        addEventListener<K extends keyof HTMLDoubleCalendarContainerElementEventMap>(type: K, listener: (this: HTMLDoubleCalendarContainerElement, ev: DoubleCalendarContainerCustomEvent<HTMLDoubleCalendarContainerElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLDoubleCalendarContainerElementEventMap>(type: K, listener: (this: HTMLDoubleCalendarContainerElement, ev: DoubleCalendarContainerCustomEvent<HTMLDoubleCalendarContainerElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLDoubleCalendarContainerElement: {
        prototype: HTMLDoubleCalendarContainerElement;
        new (): HTMLDoubleCalendarContainerElement;
    };
    interface HTMLHeaderCalendarElementEventMap {
        "dvn-nextMonthCalendar": any;
        "dvn-previousMonthCalendar": any;
    }
    interface HTMLHeaderCalendarElement extends Components.HeaderCalendar, HTMLStencilElement {
        addEventListener<K extends keyof HTMLHeaderCalendarElementEventMap>(type: K, listener: (this: HTMLHeaderCalendarElement, ev: HeaderCalendarCustomEvent<HTMLHeaderCalendarElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLHeaderCalendarElementEventMap>(type: K, listener: (this: HTMLHeaderCalendarElement, ev: HeaderCalendarCustomEvent<HTMLHeaderCalendarElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLHeaderCalendarElement: {
        prototype: HTMLHeaderCalendarElement;
        new (): HTMLHeaderCalendarElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "calendar-double": HTMLCalendarDoubleElement;
        "calendar-input-selection": HTMLCalendarInputSelectionElement;
        "calendar-single": HTMLCalendarSingleElement;
        "double-calendar-container": HTMLDoubleCalendarContainerElement;
        "header-calendar": HTMLHeaderCalendarElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface CalendarDouble {
        "mainDateReceived"?: Date;
        "onDvn-applicationDate"?: (event: CalendarDoubleCustomEvent<CalendarEntry>) => void;
        "onDvn-calendarDoubleSetDate"?: (event: CalendarDoubleCustomEvent<CalendarEntry>) => void;
        "onDvn-rangeDate"?: (event: CalendarDoubleCustomEvent<CalendarEntry[]>) => void;
        "typeSelection"?: 'oneDay' | 'range' | 'period';
    }
    interface CalendarInputSelection {
    }
    interface CalendarSingle {
        "calendarActive"?: boolean;
        "dateCalendar"?: CalendarEntry;
        "numberCalendar"?: 'main' | 'secondary';
        "onDvn-valueCalendarSelected"?: (event: CalendarSingleCustomEvent<any>) => void;
        "positionRange"?: PositionRange[];
        "setCalendar"?: CalendarEntry;
        "typeSelection"?: 'oneDay' | 'range' | 'period';
    }
    interface DoubleCalendarContainer {
        "onDvn-arrayDatesSelected"?: (event: DoubleCalendarContainerCustomEvent<Array<Date | string>>) => void;
        "onDvn-changeCleanPeriod"?: (event: DoubleCalendarContainerCustomEvent<any>) => void;
        "onDvn-cleanCalendarSelection"?: (event: DoubleCalendarContainerCustomEvent<any>) => void;
        "onDvn-closeDoubleCalendar"?: (event: DoubleCalendarContainerCustomEvent<boolean>) => void;
    }
    interface HeaderCalendar {
        "nameInactive"?: boolean;
        "nameMonth"?: string;
        "onDvn-nextMonthCalendar"?: (event: HeaderCalendarCustomEvent<any>) => void;
        "onDvn-previousMonthCalendar"?: (event: HeaderCalendarCustomEvent<any>) => void;
        "position"?: 'left' | 'right';
        "twoArrow"?: boolean;
        "year"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "calendar-double": CalendarDouble;
        "calendar-input-selection": CalendarInputSelection;
        "calendar-single": CalendarSingle;
        "double-calendar-container": DoubleCalendarContainer;
        "header-calendar": HeaderCalendar;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "calendar-double": LocalJSX.CalendarDouble & JSXBase.HTMLAttributes<HTMLCalendarDoubleElement>;
            "calendar-input-selection": LocalJSX.CalendarInputSelection & JSXBase.HTMLAttributes<HTMLCalendarInputSelectionElement>;
            "calendar-single": LocalJSX.CalendarSingle & JSXBase.HTMLAttributes<HTMLCalendarSingleElement>;
            "double-calendar-container": LocalJSX.DoubleCalendarContainer & JSXBase.HTMLAttributes<HTMLDoubleCalendarContainerElement>;
            "header-calendar": LocalJSX.HeaderCalendar & JSXBase.HTMLAttributes<HTMLHeaderCalendarElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
