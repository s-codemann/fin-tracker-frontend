import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-obligation-backdrop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './obligation-backdrop.component.html',
  styleUrls: ['./obligation-backdrop.component.scss']
})
export class ObligationBackdropComponent {
title:string = "Debts"
}
