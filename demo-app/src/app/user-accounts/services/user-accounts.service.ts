import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

import { User, NewUser } from '../models/users';
import { UserRefresh } from '../models/UserRefresh';
import { UserResult } from '../models/UserResult';
import { CurrentUser } from '../models/CurrentUser';

@Injectable({
  providedIn: 'root'
})
export class UserAccountsService {

  private accessToken: string | null = null;
  private currentUser: CurrentUser | null = null;

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

    const url = `${environment.apiUrl}/users/username_available`;

    return this.httpClient.post<boolean>(url, {
      username, kind: 'employee'
    });
  }

  public login(username: string, password: string) {

    const url = `${environment.apiUrl}/users/login`;

    return this.httpClient.post<UserResult>(url, {
      username, password, kind: 'employee'
    })
      .pipe(
        tap(userResult => {
          this.accessToken = userResult.accessToken;
          localStorage.refreshToken = userResult.refreshToken;
        }),
        map(userResult => {
          const currentUser = new CurrentUser(
            userResult.username,
            userResult.userKind,
            userResult.displayName,
          );
          userResult.roles.forEach(role => currentUser.addRole(role));
          return currentUser;
        }),
        tap(currentUser => {
          this.currentUser = currentUser;
        })
      );
  }

  public refreshUser() {
    const url = `${environment.apiUrl}/users/refresh`;
    return this.httpClient.get<UserRefresh>(url).pipe(
      tap(userRefresh => {
        this.accessToken = userRefresh.accessToken;
        localStorage.refreshToken = userRefresh.refreshToken;
      }),
      map(() => of(true)),
    );
  }

  public getCurrentUser() {
    return this.currentUser;
  }

  public getAccessToken() {
    return this.accessToken;
  }

  public getRefreshToken() {
    return localStorage.refreshToken;
  }
}
