import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forget-password-content',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './forget-password-content.component.html',
  styleUrl: './forget-password-content.component.scss',
})
export class ForgetPasswordContentComponent {}
