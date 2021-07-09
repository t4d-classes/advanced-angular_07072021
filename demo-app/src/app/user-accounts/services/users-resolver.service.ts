import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs';

import { User } from '../models/users';
import { UserAccountsService } from './user-accounts.service';

@Injectable({
  providedIn: 'root'
})
export class UsersResolverService implements Resolve<User[]> {

  constructor(private userAccountsSvc: UserAccountsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    User[] | Observable<User[]> | Promise<User[]> {
    return this.userAccountsSvc.all();
  }
}
