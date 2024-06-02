import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-content',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './login-content.component.html',
  styleUrl: './login-content.component.scss',
})
export class LoginContentComponent {}
