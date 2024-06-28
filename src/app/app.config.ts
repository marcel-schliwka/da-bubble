import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { enviroment } from '../enviroments/enviroment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(enviroment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()), provideFirebaseApp(() => initializeApp({"projectId":"da-bubble-9537c","appId":"1:570485904156:web:59811456a8dc1a8e20a0d9","storageBucket":"da-bubble-9537c.appspot.com","apiKey":"AIzaSyC_F9oHX-Qwn6DPGpaynIrzcSPlbU3Mqew","authDomain":"da-bubble-9537c.firebaseapp.com","messagingSenderId":"570485904156"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()),
  ],
};
