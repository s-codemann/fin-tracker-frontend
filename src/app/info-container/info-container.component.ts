import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObligationService } from '../obligation.service';

@Component({
  selector: 'app-info-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-container.component.html',
  styleUrls: ['./info-container.component.scss'],
})
export class InfoContainerComponent {
  obligationService = inject(ObligationService);
  totalInstallments$ = this.obligationService.totalInstallments$;
  totalDebts$ = this.obligationService.totalDebts$;
}
