import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationContentComponent } from './login/registration-content/registration-content.component';
import { LoginContentComponent } from './login/login-content/login-content.component';
import { ForgetPasswordContentComponent } from './login/forget-password-content/forget-password-content.component';
import { IntroScreenComponent } from './intro-screen/intro-screen.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: IntroScreenComponent,
    children: [
      { path: '', component: LoginContentComponent },
      { path: 'login', component: LoginContentComponent },
      { path: 'register', component: RegistrationContentComponent },
      { path: 'reset', component: ForgetPasswordContentComponent },
    ],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
];
