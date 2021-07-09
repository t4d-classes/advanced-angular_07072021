import { Component, OnInit, Input } from '@angular/core';

import { User } from '../../models/users';

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.css']
})
export class RegisteredUsersComponent implements OnInit {

  @Input()
  users: User[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
