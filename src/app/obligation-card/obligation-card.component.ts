import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICard } from '../models/card.interface';

@Component({
  selector: 'app-obligation-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './obligation-card.component.html',
  styleUrls: ['./obligation-card.component.scss'],
})
export class ObligationCardComponent {
  @Input('card') card?: ICard;
}
