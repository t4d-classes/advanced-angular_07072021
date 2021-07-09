import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from 'src/app/user-accounts/models/users';

@Component({
  selector: 'app-user-account-page',
  templateUrl: './user-account-page.component.html',
  styleUrls: ['./user-account-page.component.css']
})
export class UserAccountPageComponent implements OnInit {

  users: User[] = [];

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.users = this.route.snapshot.data.users as User[];
  }

}
