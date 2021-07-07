import { AbstractControl } from "@angular/forms";
import { map } from 'rxjs/operators';

import { UserAccountsService } from "../services/user-accounts.service";

export const usernameAvailableValidator = (userAccountsSvc: UserAccountsService) => {

  // this is the actual validator function
  return (control: AbstractControl) => {

    return userAccountsSvc
      .usernameAvailable(control.value)
      .pipe(map(isUsernameAvailable => {

        if (isUsernameAvailable) {
          return null; // passes validation
        } else {
          // does not pass validation return an object
          // errors object
          return {
            usernameAvailable: true,
          };
        }

      }))

  };

};