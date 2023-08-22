import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-obligation-form',
  templateUrl: './add-obligation-form.component.html',
  styleUrls: ['./add-obligation-form.component.scss'],
  standalone: true,
})
export class AddObligationFormComponent {
  @Output() closeForm = new EventEmitter();
  close() {
    this.closeForm.emit();
  }
}
