import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { selectAuthErrorEmail } from '../../auth/state/auth.selectors';

@Injectable({ providedIn: 'root' })
export class UniqueEmailValidator implements AsyncValidator {
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.store.select(selectAuthErrorEmail).pipe(
      // eslint-disable-next-line @ngrx/avoid-mapping-selectors
      map(existedEmail => {
        if (!existedEmail) return null;

        return control.value === existedEmail
          ? {
              emailExist: true,
            }
          : null;
      })
    );
  }

  constructor(private readonly store: Store) {}
}
