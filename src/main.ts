import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { hydrateApplication } from '@nguniversal';

import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

hydrateApplication(RootComponent, {
  appId: 'my-app-id',
  providers: [],
  platformProviders: [],
});
