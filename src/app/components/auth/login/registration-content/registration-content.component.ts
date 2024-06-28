import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registration-content',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './registration-content.component.html',
  styleUrl: './registration-content.component.scss',
})
export class RegistrationContentComponent {
  step: number = 1;
  avatarLinks: string[] = [
    '/assets/avatars/avatar01.svg',
    '/assets/avatars/avatar02.svg',
    '/assets/avatars/avatar03.svg',
    '/assets/avatars/avatar04.svg',
    '/assets/avatars/avatar05.svg',
    '/assets/avatars/avatar06.svg',
  ];

  continue() {
    this.step++;
  }

  goBack() {
    this.step--;
  }
}
