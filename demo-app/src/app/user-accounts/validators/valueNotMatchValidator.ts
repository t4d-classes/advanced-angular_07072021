import { AbstractControl } from "@angular/forms";

export const valueNotMatchValidator = (
  firstControlPath: string, secondControlPath: string) => {

  return (control: AbstractControl) => {

    const firstControl = control.get(firstControlPath);
    const secondControl = control.get(secondControlPath);

    if (firstControl?.value !== secondControl?.value) {
      console.log('value not match passes');
      return null; // is valid
    } else {
      // is not valid
      console.log('value not match fails');
      return {
        valueNotMatch: true,
        firstControlPath,
        secondControlPath,
        firstControlValue: firstControl?.value,
        secondControlValue: secondControl?.value,
      };
    }

  };
};