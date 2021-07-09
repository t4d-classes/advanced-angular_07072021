import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, CanActivate,
  RouterStateSnapshot, UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';

import { MatSnackBar } from '@angular/material/snack-bar';

import { UserAccountsService } from './user-accounts.service';

@Injectable({
  providedIn: 'root'
})
export class AllowedRolesGuardService implements CanActivate {

  constructor(private userAccountsSvc: UserAccountsService, private snackBar: MatSnackBar) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    if (!this.userAccountsSvc.getCurrentUser()?.hasRole(route.data.roles)) {

      const snackBarRef = this.snackBar.open(`You are not allowed to navigate to ${route.data.title}.`, 'Dismiss');

      snackBarRef.onAction().subscribe(() => snackBarRef.dismiss());

      return false;

    } else {
      return true;
    }


  }
}
