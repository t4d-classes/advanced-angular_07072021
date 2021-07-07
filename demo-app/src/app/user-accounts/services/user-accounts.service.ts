import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { User, NewUser } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserAccountsService {

  private users = new BehaviorSubject<User[]>([]);

  constructor() { }

  all() {
    return this.users;
  }

  append(user: NewUser) {

    let users = this.users.value;

    users = [
      ...users,
      {
        ...user,
        id: Math.max(...users.map(u => u.id), 0) + 1,
      },
    ];

    this.users.next(users);
  }
}
