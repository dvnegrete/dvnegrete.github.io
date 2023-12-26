import type { Components, JSX } from "../types/components";

interface DoubleCalendarContainer extends Components.DoubleCalendarContainer, HTMLElement {}
export const DoubleCalendarContainer: {
  prototype: DoubleCalendarContainer;
  new (): DoubleCalendarContainer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
