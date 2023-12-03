import { AbstractControl, ValidatorFn } from '@angular/forms';

export const passwordMatchesValidator: ValidatorFn = (control: AbstractControl) => {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;

  return password && confirmPassword && password === confirmPassword ? null : { confirmPassword: true };
};
