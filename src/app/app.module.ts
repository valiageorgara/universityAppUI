import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import { MatToolbarModule} from "@angular/material/toolbar";
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MatIconModule} from "@angular/material/icon";
import { HomeComponent } from './home/home.component';
import { MatListModule} from "@angular/material/list";
import { AboutComponent } from './about/about.component';
import { MatButtonModule} from "@angular/material/button";
import { ApplicationComponent } from './application/application.component';
import { MatCardModule} from "@angular/material/card";
import { MatInputModule} from "@angular/material/input";
import { MatSelectModule} from "@angular/material/select";
import { ViewComponent } from './view/view.component';

function initializeKeycloak(keycloak: KeycloakService) {
  return async () => {
    const authenticated = await keycloak.init({
      config:  {
        url: 'http://localhost:8081/auth',
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
  declarations: [AppComponent, HomeComponent, AboutComponent, ApplicationComponent, ViewComponent],
  imports: [AppRoutingModule, BrowserModule, KeycloakAngularModule, HttpClientModule, MatSidenavModule, MatSelectModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, MatToolbarModule, MatIconModule, MatListModule, MatButtonModule, MatCardModule, MatInputModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
