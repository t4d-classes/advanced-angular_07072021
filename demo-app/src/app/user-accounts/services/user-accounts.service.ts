import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

import { User, NewUser } from '../models/users';
import { Employee } from '../models/employees';
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

  get employeeUrl() {
    return `${environment.apiUrl}/employees`;
  }

  all() {
    return this.httpClient.get<Employee[]>(this.employeeUrl).pipe(map(employees => {

      // returning the array of users
      return employees.reduce((users: User[], employee: Employee) => {

        // find users and add them to the array

        if (employee.username) {
          users.push({
            id: employee.employeeId,
            username: employee.username,
            firstName: employee.firstName,
            lastName: employee.lastName,
            title: employee.title,
          });
        }

        // return back the accumulator to use on the next iteration
        return users;

      }, [] /* initial empty array of user */);


    }))
  }

  append(user: NewUser) {

    return this.httpClient.post<Employee>(this.employeeUrl, {
      lastName: user.lastName,
      firstName: user.firstName,
      title: user.title,
      titleOfCourtesy: '',
      birthDate: '12/31/2000',
      hireDate: '12/31/2000',
      address: '',
      city: '',
      region: '',
      postalCode: '',
      country: '',
      homePhone: '',
      extension: '',
      photo: '',
      notes: '',
      reportsTo: 5,
      photoPath: '',
      username: user.username,
      password: '',
    })
      .pipe(map(employee => ({
        id: employee.employeeId,
        username: employee.username,
        firstName: employee.firstName,
        lastName: employee.lastName,
        title: employee.title,
      } as User)))

  }

  setPassword(username: string, newPassword: string) {
    return this.httpClient.post<void>(`${environment.apiUrl}/users/set-password`, {
      username, newPassword, userKind: 'employee',
    });
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

  public logout() {
    this.currentUser = null;
    this.accessToken = null;
    localStorage.removeItem("refreshToken");
  }
}
