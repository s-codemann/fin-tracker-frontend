import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-status-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss'],
})
export class StatusBarComponent {
  usersService = inject(UserService);
  createUser() {
    this.usersService
      .createUser({ name: 'hanss', password: 'franz' })
      .subscribe();
  }
}
