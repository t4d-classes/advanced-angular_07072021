import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { valueNotMatchValidator } from '../../validators/valueNotMatchValidator';
import { UserAccountsService } from '../../services/user-accounts.service';

const STARTS_WITH_LETTER_AND_ONLY_LETTERS_AND_NUMBERS = "[a-zA-Z]{1}[a-zA-Z0-9]*";
const AT_LEAST_ONE_LOWERCASE_LETTER = "[a-z]+";
const AT_LEAST_ONE_UPPERCASE_LETTER = "[A-Z]+";
const AT_LEAST_ONE_NUMBER = "[0-9]+";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  public userLoginForm!: FormGroup;
  public errorMessage = "";
  public userLoginFormSubmitted = false;
  public loggedIn = false;

  constructor(
    private fb: FormBuilder,
    private userAccountsSvc: UserAccountsService) { }

  ngOnInit(): void {
    this.userLoginForm = this.fb.group({
      username: ["", {
        validators: [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(STARTS_WITH_LETTER_AND_ONLY_LETTERS_AND_NUMBERS),
        ],
      }],
      password: ["", {
        validators: [
          Validators.required,
          Validators.minLength(10),
          // Validators.pattern(AT_LEAST_ONE_LOWERCASE_LETTER),
          // Validators.pattern(AT_LEAST_ONE_UPPERCASE_LETTER),
          // Validators.pattern(AT_LEAST_ONE_NUMBER),
        ],
      }],
    }, {
      validators: [valueNotMatchValidator('username', 'password')],
    });
  }

  private getErrorMessage(controlErrors: any, controlName: string): string {

    if (controlErrors?.required) {
      return `${controlName} is a required field.`;
    }

    const { requiredLength } = controlErrors?.minlength ?? {};

    if (controlErrors?.minlength) {
      return `${controlName} must be at least ${requiredLength} characters and numbers.`;
    }

    const { requiredPattern } = controlErrors?.pattern ?? {};

    if (requiredPattern === STARTS_WITH_LETTER_AND_ONLY_LETTERS_AND_NUMBERS) {
      return `${controlName} must start with a letter and can only contain letters and numbers.`;
    }

    if (requiredPattern === AT_LEAST_ONE_UPPERCASE_LETTER) {
      return `${controlName} have at least one uppercase letter.`;
    }

    if (requiredPattern === AT_LEAST_ONE_LOWERCASE_LETTER) {
      return `${controlName} have at least one lowercase letter.`;
    }

    if (requiredPattern === AT_LEAST_ONE_NUMBER) {
      return `${controlName} have at least one number.`;
    }

    if (controlErrors?.valueNotMatch) {
      return `The two fields, ${controlErrors?.firstControlPath} and ${controlErrors?.secondControlPath}, cannot be the same value.`;
    }

    console.log(controlErrors);

    return "";
  }

  private validateUserLoginForm() {

    this.errorMessage = "";

    if (this.userLoginForm.valid) return true;

    this.errorMessage = this.getErrorMessage(this.userLoginForm.get("username")?.errors, 'Username');

    this.errorMessage = this.errorMessage || this.getErrorMessage(this.userLoginForm.get("password")?.errors, 'Password');

    this.errorMessage = this.errorMessage || this.getErrorMessage(this.userLoginForm.errors, ''); // Ok

    return false;
  }

  public doUserLogin() {

    const { username, password } = this.userLoginForm.value;

    this.userLoginFormSubmitted = true;
    if (password !== "testpass" && !this.validateUserLoginForm()) return;

    this.userAccountsSvc.login(username, password).subscribe(user => {
      console.log(user);
      this.loggedIn = true;
      this.userLoginFormSubmitted = false;
    }, (err) => {
      console.log(err);
      this.loggedIn = false;
    });

  }

}
