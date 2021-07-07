import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { NewUser } from '../../models/users';
import { UserAccountsService } from '../../services/user-accounts.service';
import { usernameAvailableValidator } from '../../validators/usernameAvailableValidator';
import { valueNotMatchValidator } from '../../validators/valueNotMatchValidator';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  public registerUserForm!: FormGroup;
  public errorMessage = "";
  public registerUserFormSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private userAccountsSvc: UserAccountsService) { }

  public ngOnInit(): void {
    this.registerUserForm = this.fb.group({
      username: [ /* initial value */ "", {
        validators: [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern("[a-zA-Z]{1}[a-zA-Z0-9]*"),
        ],
        asyncValidators: [
          usernameAvailableValidator(this.userAccountsSvc),
        ]
      }],
      firstName: "",
      lastName: "",
      title: "",
    }, {
      validators: [valueNotMatchValidator('username', 'firstName')],
    });
  }

  private getErrorMessage(controlErrors: any, controlName: string): string {

    if (controlErrors?.required) {
      return `${controlName} is a required field.`;
    }

    /* add more error messages in a few mins */

    if (controlErrors?.minlength) {
      return `${controlName} must be at least 6 characters and numbers.`;
    }

    if (controlErrors?.pattern) {
      return `${controlName} must start with a letter and can only contain letters and numbers.`;
    }

    if (controlErrors?.usernameAvailable) {
      return `${controlName} is not available.`;
    }

    console.log(controlErrors);

    if (controlErrors?.valueNotMatch) {
      return `The two fields, ${controlErrors?.firstControlPath} and ${controlErrors?.secondControlPath}, cannot be the same value.`;
    }

    return "";
  }

  private validateRegisterUserForm() {
    this.errorMessage = "";
    if (this.registerUserForm.valid) return true;

    this.errorMessage = this.getErrorMessage(
      this.registerUserForm.get("username")?.errors, 'Username');

    this.errorMessage = this.errorMessage || this.getErrorMessage(
      this.registerUserForm.errors, '');

    return false;
  }

  public doRegisterUser() {
    this.registerUserFormSubmitted = true;
    if (!this.validateRegisterUserForm()) return;
    this.userAccountsSvc.append(this.registerUserForm.value as NewUser);
    this.registerUserFormSubmitted = false;
  }

}
