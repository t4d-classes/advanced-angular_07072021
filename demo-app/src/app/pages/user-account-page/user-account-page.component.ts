import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { User, NewUser, RegisterUserForm } from 'src/app/user-accounts/models/users';

import { UserAccountsService } from 'src/app/user-accounts/services/user-accounts.service';

@Component({
  selector: 'app-user-account-page',
  templateUrl: './user-account-page.component.html',
  styleUrls: ['./user-account-page.component.css']
})
export class UserAccountPageComponent implements OnInit {

  users: User[] = [];

  constructor(
    private route: ActivatedRoute,
    private usersAccountSvc: UserAccountsService) {

  }

  ngOnInit(): void {
    this.users = this.route.snapshot.data.users as User[];
  }

  doAddUserAndRefreshUsers(userForm: RegisterUserForm) {

    const newUser = {
      username: userForm.username,
      firstName: userForm.firstName,
      lastName: userForm.lastName,
      title: userForm.title,
    } as NewUser;

    this.usersAccountSvc.append(newUser).pipe(
      switchMap(addedUser =>
        this.usersAccountSvc.setPassword(addedUser.username, userForm.password)),
      switchMap(() => this.usersAccountSvc.all())
    ).subscribe(users => {
      this.users = users;
    });
  }

}
