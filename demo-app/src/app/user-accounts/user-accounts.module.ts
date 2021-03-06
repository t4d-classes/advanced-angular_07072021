import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RegisterUserComponent } from './components/register-user/register-user.component';
import { RegisteredUsersComponent } from './components/registered-users/registered-users.component';
import { UserLoginComponent } from './components/user-login/user-login.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    RegisterUserComponent,
    RegisteredUsersComponent,
    UserLoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
  ],
  exports: [
    RegisterUserComponent,
    RegisteredUsersComponent,
    UserLoginComponent,
  ]
})
export class UserAccountsModule { }
