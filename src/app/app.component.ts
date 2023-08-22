import { Component } from '@angular/core';
import { ICard } from './models/card.interface';
import { enterAnimation } from './animations/add-form-animations';
import { AddObligationFormComponent } from './add-obligation-form/add-obligation-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [enterAnimation],
})
export class AppComponent {
  title = 'finance-tracker';
  add() {
    console.log('add');
    this.addingObligation = true;
  }
  closeForm() {
    this.addingObligation = false;
  }
  cards: ICard[] = [
    { title: 'hi' },
    { title: 'bye' },
    { title: 'Mueller Anwalt' },
  ];
  addingObligation = false;
}
