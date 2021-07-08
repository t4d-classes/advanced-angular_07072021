import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserAccountsModule } from './user-accounts/user-accounts.module';
import { AuthorizationInterceptorService } from './user-accounts/services/authorization-interceptor.service';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { UserAccountPageComponent } from './pages/user-account-page/user-account-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    UserAccountPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAccountsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizationInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
