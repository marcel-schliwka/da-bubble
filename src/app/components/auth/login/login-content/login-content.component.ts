import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword, Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-login-content',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './login-content.component.html',
  styleUrl: './login-content.component.scss',
})
export class LoginContentComponent {
  constructor(private auth: Auth){}
  createUser() {
    const auth = getAuth();
    console.log(auth);
    const mail = "marcelschliwka@proton.me";
    const pwd = "ElpasoTexas123";
    createUserWithEmailAndPassword(auth, mail, pwd)
      .then((userCredentials) => {
        console.log(userCredentials.user, 'is signed up!');
      })
      .catch((error) => {
        console.log(error);
        
      })
  }

  loginUser() {
    const auth = getAuth();
    const mail = "marcelschliwka@protonmail.com";
    const pwd = "ElpasoTexas123";
    console.log('Clicked');
    

    signInWithEmailAndPassword(auth, mail, pwd)
      .then((creds) => {
        console.log(creds.user.uid);
        
      })
      .catch(error => console.log(error)
      )
  }
}
