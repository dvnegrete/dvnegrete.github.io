import type { Components, JSX } from "../types/components";

interface CalendarInputSelection extends Components.CalendarInputSelection, HTMLElement {}
export const CalendarInputSelection: {
  prototype: CalendarInputSelection;
  new (): CalendarInputSelection;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
