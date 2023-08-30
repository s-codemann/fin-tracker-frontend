export interface IObligation {
  title: string;
  monthly: number;
  active?: boolean;
  lastPaidDate?: number;
  dueTime?: number;
}
