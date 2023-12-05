import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"da-bubble-9537c","appId":"1:570485904156:web:59811456a8dc1a8e20a0d9","storageBucket":"da-bubble-9537c.appspot.com","apiKey":"AIzaSyC_F9oHX-Qwn6DPGpaynIrzcSPlbU3Mqew","authDomain":"da-bubble-9537c.firebaseapp.com","messagingSenderId":"570485904156"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideDatabase(() => getDatabase()))]
};
