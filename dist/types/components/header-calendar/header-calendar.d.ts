import { EventEmitter } from '../../stencil-public-runtime';
export declare class HeaderCalendar {
  nameMonth: string;
  year: string;
  nameInactive: boolean;
  position: 'left' | 'right';
  twoArrow: boolean;
  nextMonthCalendar: EventEmitter;
  previousMonthCalendar: EventEmitter;
  render(): any;
}
