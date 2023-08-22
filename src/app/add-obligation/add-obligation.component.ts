import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-obligation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-obligation.component.html',
  styleUrls: ['./add-obligation.component.scss'],
})
export class AddObligationComponent {
  @Output() add = new EventEmitter();
  emitAdd() {
    this.add.emit();
  }
  create() {
    console.log('creating');
  }
}
