import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { UserAccountsService } from './user-accounts.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuardService implements CanActivate {

  constructor(
    private userAccountsSvc: UserAccountsService,
    private router: Router,
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    console.log("trying to route to " + route.data.title);

    if (!this.userAccountsSvc.getCurrentUser()) {
      return this.router.parseUrl('/login');
    } else {
      return true;
    }

  }
}
