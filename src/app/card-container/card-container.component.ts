import {
  Component,
  EventEmitter,
  Inject,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObligationCardComponent } from '../obligation-card/obligation-card.component';
import { AddObligationComponent } from '../add-obligation/add-obligation.component';
import { ObligationService } from '../obligation.service';
import { Observable, Subscription, tap } from 'rxjs';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { IDebt } from '../models/debt.interface';
import { AppStateService } from '../app-state.service';
import { obligationCategory } from '../models/types/categories.type';
import { DebtCardComponent } from '../debt-card/debt-card.component';
import { InstallmentCardComponent } from '../installment-card/installment-card.component';

@Component({
  selector: 'app-card-container',
  standalone: true,
  imports: [
    CommonModule,
    ObligationCardComponent,
    AddObligationComponent,
    DebtCardComponent,
    InstallmentCardComponent,
  ],
  // providers: [ObligationService],
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss'],
})
export class CardContainerComponent implements OnInit {
  constructor(
    public obligationService: ObligationService,
    private stateService: AppStateService
  ) {
    this.obligationService.updateDebts();
    this.obligationService.updateInstallments();
  }

  //debts
  debts$ = this.obligationService.debts$;
  //debts

  //state
  selectedCategory$: Observable<obligationCategory> =
    this.stateService.getSelectedCategory();

  installments$ = this.obligationService.installments$;

  @Output()
  add = new EventEmitter(); //emits when user wants to add an obligation
  emitAdd() {
    this.add.emit();
  }
  ngOnInit(): void {}
}
