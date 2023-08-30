import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { obligationCategory } from './models/types/categories.type';

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  constructor() {}
  //selected Category subject
  selectedCategorySubj: BehaviorSubject<obligationCategory> =
    new BehaviorSubject<obligationCategory>('debt');

  //return selected Category Observable
  getSelectedCategory() {
    return this.selectedCategorySubj.asObservable();
  }

  //update selected category
  updateSelectedCategory(category: obligationCategory) {
    this.selectedCategorySubj.next(category);
  }
}
