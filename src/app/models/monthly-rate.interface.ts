import { IObligation } from './obligation.interface';

export interface IInstallment extends IObligation {
    activeUntil?:number;
}
