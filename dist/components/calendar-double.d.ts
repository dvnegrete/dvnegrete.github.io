import type { Components, JSX } from "../types/components";

interface CalendarDouble extends Components.CalendarDouble, HTMLElement {}
export const CalendarDouble: {
  prototype: CalendarDouble;
  new (): CalendarDouble;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
