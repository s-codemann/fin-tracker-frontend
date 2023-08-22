import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObligationCardComponent } from '../obligation-card/obligation-card.component';
import { AddObligationComponent } from '../add-obligation/add-obligation.component';

@Component({
  selector: 'app-card-container',
  standalone: true,
  imports: [CommonModule, ObligationCardComponent, AddObligationComponent],
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss'],
})
export class CardContainerComponent {
  @Output() add = new EventEmitter();
  emitAdd() {
    this.add.emit();
  }
}
