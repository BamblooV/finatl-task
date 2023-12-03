import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordStrengthValidator(control: AbstractControl<string>): ValidationErrors | null {
  const { value } = control;

  if (!value) {
    return null;
  }

  if (value.length < 8) {
    return { passwordStrength: 'at least 8 characters' };
  }

  const hasUpperCase = /[A-Z]+/.test(value);

  if (!hasUpperCase) {
    return { passwordStrength: 'a uppercase letter' };
  }

  const hasNumeric = /[0-9]+/.test(value);

  if (!hasNumeric) {
    return { passwordStrength: 'a mixture of letters and numbers' };
  }

  const hasSpecialCharacters = /[!@#?\]]/.test(value);

  if (!hasSpecialCharacters) {
    return { passwordStrength: 'inclusion of at least one special character, e.g., ! @ # ? ]' };
  }

  return null;
}
