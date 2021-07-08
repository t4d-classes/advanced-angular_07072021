import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, CanActivate,
  RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { UserAccountsService } from './user-accounts.service';

@Injectable({
  providedIn: 'root'
})
export class AllowedRolesGuardService implements CanActivate {

  constructor(private userAccountsSvc: UserAccountsService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    return !!this.userAccountsSvc.getCurrentUser()?.hasRole(route.data.roles);

  }
}
