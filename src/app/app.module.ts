import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
function initializeKeycloak(keycloak: KeycloakService) {
  return async () => {
    const authenticated = await keycloak.init({
      config:  {
        url: 'http://localhost:8081',
        realm: 'springbootapp',
        clientId: 'university'
      },
      initOptions: {
        checkLoginIframe: false
      },
      enableBearerInterceptor: true,
      bearerPrefix: 'Bearer',
    });

    if (!authenticated) {
      console.log('Not authenticated');
      await keycloak.login();

    } else {
      console.log('Authenticated!');
    }
  };
}
@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserModule, KeycloakAngularModule,HttpClientModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
