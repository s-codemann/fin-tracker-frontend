import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppStateService } from '../app-state.service';
import { Observable, map } from 'rxjs';
import { obligationCategory } from '../models/types/categories.type';

@Component({
  selector: 'app-obligation-backdrop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './obligation-backdrop.component.html',
  styleUrls: ['./obligation-backdrop.component.scss'],
})
export class ObligationBackdropComponent {
  stateService = inject(AppStateService);

  changeCategory() {
    switch (
      this.stateService.selectedCategorySubj.getValue() as obligationCategory
    ) {
      case 'debt':
        this.stateService.selectedCategorySubj.next('installment');
        break;
      case 'installment':
        this.stateService.selectedCategorySubj.next('debt');
        break;
    }
  }
  title$: Observable<string> = this.stateService.getSelectedCategory().pipe(
    map((selectedCategory: obligationCategory) => {
      if (selectedCategory === 'debt') {
        return 'Debts';
      } else if (selectedCategory === 'installment') {
        return 'Installments';
      } else return '----';
    })
  );
}
