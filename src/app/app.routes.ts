import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistrationContentComponent } from './components/auth/login/registration-content/registration-content.component';
import { LoginContentComponent } from './components/auth/login/login-content/login-content.component';
import { ForgetPasswordContentComponent } from './components/auth/login/forget-password-content/forget-password-content.component';
import { IntroScreenComponent } from './intro-screen/intro-screen.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
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
