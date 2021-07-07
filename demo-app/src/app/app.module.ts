import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserAccountsModule } from './user-accounts/user-accounts.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAccountsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
