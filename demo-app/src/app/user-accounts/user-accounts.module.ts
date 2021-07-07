import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterUserComponent } from './components/register-user/register-user.component';
import { RegisteredUsersComponent } from './components/registered-users/registered-users.component';



@NgModule({
  declarations: [
    RegisterUserComponent,
    RegisteredUsersComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    RegisterUserComponent,
    RegisteredUsersComponent
  ]
})
export class UserAccountsModule { }
