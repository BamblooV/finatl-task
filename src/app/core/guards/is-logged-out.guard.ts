import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { selectAuthIsLoggedIn } from '../../auth/state/auth.selectors';

export const isLoggedOutGuard: CanActivateFn = (route, state) => {
  const store = inject(Store);
  const router = inject(Router);

  return store.select(selectAuthIsLoggedIn).pipe(
    map(isLoggedIn => {
      if (isLoggedIn) return router.createUrlTree(['/']);

      return !isLoggedIn;
    })
  );
};
