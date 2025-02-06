import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'jello-32b15',
        appId: '1:877067539281:web:cf19e48734175e65ecb970',
        storageBucket: 'jello-32b15.firebasestorage.app',
        apiKey: 'AIzaSyCKJ7lWTs11GzUcFap3uym2jxZJGC76la0',
        authDomain: 'jello-32b15.firebaseapp.com',
        messagingSenderId: '877067539281',
        measurementId: 'G-2Q45WR23MN',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()), provideAnimationsAsync(),
  ],
};
