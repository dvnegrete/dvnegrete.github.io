import type { Components, JSX } from "../types/components";

interface HeaderCalendar extends Components.HeaderCalendar, HTMLElement {}
export const HeaderCalendar: {
  prototype: HeaderCalendar;
  new (): HeaderCalendar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
