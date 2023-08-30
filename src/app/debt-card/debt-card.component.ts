import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObligationCardComponent } from '../obligation-card/obligation-card.component';
import { IDebt } from '../models/debt.interface';

@Component({
  selector: 'app-debt-card',
  standalone: true,
  imports: [CommonModule, ObligationCardComponent],
  templateUrl: './debt-card.component.html',
  styleUrls: ['./debt-card.component.scss'],
})
export class DebtCardComponent {
  @Input({ alias: 'debt', required: true }) debt!: IDebt;
}
