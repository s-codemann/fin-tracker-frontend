import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICard } from '../models/card.interface';
import { IObligation } from '../models/obligation.interface';

@Component({
  selector: 'app-obligation-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './obligation-card.component.html',
  styleUrls: ['./obligation-card.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ObligationCardComponent {
  @Input('obligation') obligation!: IObligation;
  toggleOptions(toShow: boolean) {
    this.showOptions = toShow;
  }
  showOptions = false;
}
