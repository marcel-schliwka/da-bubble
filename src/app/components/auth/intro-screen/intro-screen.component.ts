import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-intro-screen',
  standalone: true,
  imports: [CommonModule, LoginComponent],
  templateUrl: './intro-screen.component.html',
  styleUrl: './intro-screen.component.scss',
})
export class IntroScreenComponent {
  constructor() {
    let clientHeight = window.innerHeight;
    document.documentElement.style.setProperty('--clientY', '${clientHight}px');
  }
}
