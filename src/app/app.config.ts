import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter, withInMemoryScrolling} from '@angular/router';
import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {environment} from '../environments/environment';
import {AnalyticsModule} from '@angular/fire/analytics';
import {connectFunctionsEmulator, getFunctions, provideFunctions} from '@angular/fire/functions';
import {MARKED_OPTIONS, provideMarkdown} from 'ngx-markdown';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withInMemoryScrolling({
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
    })),
    provideMarkdown({
      markedOptions: {
        provide: MARKED_OPTIONS,
        useValue: {
          gfm: true,
          breaks: false,
          pedantic: false,
        },
      },
    }),
    provideClientHydration(),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    importProvidersFrom(AnalyticsModule),
    provideFunctions(() => {
      const functions = getFunctions();
      if (!environment.production) {
        connectFunctionsEmulator(functions, 'localhost', 5001);
      }
      return functions;
    }),
  ]
};
