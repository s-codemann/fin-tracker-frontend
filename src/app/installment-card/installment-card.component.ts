import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IInstallment } from '../models/monthly-rate.interface';
import { ObligationCardComponent } from '../obligation-card/obligation-card.component';

@Component({
  selector: 'app-installment-card',
  standalone: true,
  imports: [CommonModule, ObligationCardComponent],
  templateUrl: './installment-card.component.html',
  styleUrls: ['./installment-card.component.scss'],
})
export class InstallmentCardComponent {
  @Input({ alias: 'installment', required: true }) installment!: IInstallment;
}
