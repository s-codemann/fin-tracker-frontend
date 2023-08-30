import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  inject,
} from '@angular/core';
import { ObligationService } from '../obligation.service';
import { CommonModule } from '@angular/common';
import { AppStateService } from '../app-state.service';
import { obligationCategory } from '../models/types/categories.type';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-obligation-form',
  templateUrl: './add-obligation-form.component.html',
  styleUrls: ['./add-obligation-form.component.scss'],
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
})
export class AddObligationFormComponent implements AfterViewInit {
  obligationService = inject(ObligationService);
  selectedCategoryService = inject(AppStateService);
  cd = inject(ChangeDetectorRef);
  @Output() closeForm = new EventEmitter();
  @ViewChild('select') select!: ElementRef<HTMLSelectElement>;

  fb = new FormBuilder();
  ngAfterViewInit(): void {
    const selectedCategory =
      this.selectedCategoryService.selectedCategorySubj.getValue();
    this.select.nativeElement.value = selectedCategory;
    console.log('selected', selectedCategory);
    this.evaluateFormToShow(selectedCategory);
    this.cd.detectChanges();
    this.debtForm.valueChanges.subscribe(console.log);
  }

  showDebtCreationForm = false;
  showInstallmentCreationForm = false;

  evaluateFormToShow(obligationCategory: obligationCategory) {
    switch (obligationCategory) {
      case 'debt':
        this.showDebtCreationForm = true;
        this.showInstallmentCreationForm = false;
        break;
      case 'installment':
        this.showDebtCreationForm = false;
        this.showInstallmentCreationForm = true;
        break;
    }
  }

  switchForm(ev: Event) {
    const newValue = (ev.target! as HTMLSelectElement)
      .value as obligationCategory;
    this.evaluateFormToShow(newValue);
    console.log(this.showDebtCreationForm, this.showInstallmentCreationForm);
  }

  close() {
    this.closeForm.emit();
  }
  create(ev: Event) {
    ev.preventDefault();
    console.log(
      this.installmentForm.valid,
      this.installmentForm.controls.title.valid,
      this.installmentForm.controls.monthly.valid
    );
    if (this.showDebtCreationForm && this.debtForm.valid) {
      const total = this.debtForm.value.total!;
      const title = this.debtForm.value.title!;
      const monthly = this.debtForm.value.monthly!;
      const lastPaidDate = this.debtForm.value.lastPaidDate as
        | number
        | undefined;
      const dueTime = this.debtForm.value.lastPaidDate as number | undefined;

      this.obligationService.createDebt({
        total,
        title,
        monthly,
        lastPaidDate,
        dueTime,
      });
    } else if (this.showInstallmentCreationForm && this.installmentForm.valid) {
      const title = this.installmentForm.value.title!;
      const monthly = this.installmentForm.value.monthly!;
      this.obligationService.createInstallment({ title, monthly });
    }
  }
  debtForm = this.fb.group({
    title: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    monthly: new FormControl<number>(0, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    total: new FormControl<number>(0, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    lastPaidDate: 0,
    dueTime: 0,
    active: true,
  });

  installmentForm = this.fb.group({
    title: new FormControl<string>('', { validators: [Validators.required] }),
    monthly: new FormControl<number>(0, { validators: [Validators.required] }),
    activeUntil: '',
    lastPaidDate: '',
    dueTime: '',
    active: true,
  });
}
