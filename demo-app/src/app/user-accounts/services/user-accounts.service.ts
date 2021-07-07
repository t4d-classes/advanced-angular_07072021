import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { User, NewUser } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserAccountsService {

  private users = new BehaviorSubject<User[]>([]);

  constructor(private httpClient: HttpClient) { }

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

  public usernameAvailable(username: string) {

    const url = "http://student1.databots.cloud/users/username_available"

    return this.httpClient.post<boolean>(url, {
      username, kind: 'employee'
    });
  }
}
