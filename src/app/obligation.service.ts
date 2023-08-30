import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  BehaviorSubject,
  Observable,
  ReplaySubject,
  Subject,
  map,
  reduce,
  scan,
  tap,
} from 'rxjs';
import { IDebt } from './models/debt.interface';
import { obligationCategory } from './models/types/categories.type';
import { IInstallment } from './models/monthly-rate.interface';

@Injectable({
  providedIn: 'root',
})
export class ObligationService {
  constructor() {}
  httpClient = inject(HttpClient);
  //----------debts----------------------
  //retrieves debts from api
  getDebts$ = this.httpClient.get('http://localhost:3000/debts', {
    observe: 'body',
    responseType: 'json',
  }) as Observable<IDebt[]>;
  //subject of debts
  debtsSubj: ReplaySubject<IDebt[]> = new ReplaySubject(1);
  debts$ = this.debtsSubj.asObservable();
  //refreshes ui
  updateDebts() {
    this.getDebts$.subscribe((val) => {
      this.debtsSubj.next(val);
      console.log('updated', val);
    });
  }
  //creates new debt
  createDebt(debt: IDebt) {
    return this.httpClient
      .post('http://localhost:3000/debts/create', debt)
      .subscribe(() => this.updateDebts());
  }
  //monthly sum of debts
  totalDebts$ = this.debts$.pipe(
    map((debts) => debts.reduce((total, current) => total + current.monthly, 0))
  );

  //INSTALLMENTS
  //retrieves installments from api
  getInstallments$ = this.httpClient.get('http://localhost:3000/installments', {
    observe: 'body',
    responseType: 'json',
  }) as Observable<IInstallment[]>;
  //subject of debts
  installmentsSubj: ReplaySubject<IInstallment[]> = new ReplaySubject(1);
  installments$ = this.installmentsSubj.asObservable();
  //refreshes ui
  updateInstallments() {
    this.getInstallments$.subscribe((val) => {
      this.installmentsSubj.next(val);
      console.log('updated', val);
    });
  }
  //creates new debt
  createInstallment(installment: IInstallment) {
    return this.httpClient
      .post('http://localhost:3000/installments/create', installment)
      .subscribe(() => this.updateInstallments());
  }
  totalInstallments$ = this.installments$.pipe(
    map((installments) =>
      installments.reduce((acc: any, curr: any, index) => {
        return acc + curr.monthly;
      }, 0)
    ),
    tap((val) => console.log('accumulated', val))
  );
}
