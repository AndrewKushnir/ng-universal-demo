/***************************************************************************************************
 * Initialize the server environment - for example, adding DOM built-in types to the global scope.
 *
 * NOTE:
 * This import must come before any imports (direct or transitive) that rely on DOM built-ins being
 * available, such as `@angular/elements`.
 */
import '@angular/platform-server/init';

import { enableProdMode } from '@angular/core';
import { serverRenderApplication } from '@nguniversal';

import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export default serverRenderApplication(RootComponent, {
  appId: 'my-app-id',
  providers: [],
  platformProviders: [],
});
