import { AbstractControl } from '@angular/forms';

export const getErrorMessageFactory =
  (errors: Record<string, string>) =>
  (control: AbstractControl | null): string => {
    if (!control) return '';
    if (!control.errors) return '';

    const errorKey = Object.keys(control.errors)[0];

    if (errorKey && errors[errorKey]) {
      return errors[errorKey] || 'Wrong value';
    }

    return 'Wrong value';
  };
