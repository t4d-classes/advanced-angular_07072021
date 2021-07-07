import { Component, OnInit } from '@angular/core';

import { User } from '../../models/users';
import { UserAccountsService } from '../../services/user-accounts.service';

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.css']
})
export class RegisteredUsersComponent implements OnInit {

  users$ = this.userAccountsSvc.all();

  constructor(private userAccountsSvc: UserAccountsService) { }

  ngOnInit(): void {
  }

}
