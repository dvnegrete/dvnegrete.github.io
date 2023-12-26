import type { Components, JSX } from "../types/components";

interface CalendarSingle extends Components.CalendarSingle, HTMLElement {}
export const CalendarSingle: {
  prototype: CalendarSingle;
  new (): CalendarSingle;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
