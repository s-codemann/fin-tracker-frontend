import { IObligation } from './obligation.interface';

export interface IDebt extends IObligation {
  total: number;
  lastPaidDate: number;
  dueTime: number;
}
