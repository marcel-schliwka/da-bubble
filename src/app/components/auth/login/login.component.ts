import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginContentComponent } from './login-content/login-content.component';
import { RegistrationContentComponent } from './registration-content/registration-content.component';

import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    LoginContentComponent,
    RegistrationContentComponent,
    RouterOutlet,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

}
