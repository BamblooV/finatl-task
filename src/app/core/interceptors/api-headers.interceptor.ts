import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { switchMap, take } from 'rxjs';
import { AuthSelectors } from '../../auth/state';

export const apiHeadersInterceptor: HttpInterceptorFn = (req, next) => {
  const store = inject(Store);

  return store.select(AuthSelectors.selectAuthCredentials).pipe(
    take(1),
    switchMap(credentials => {
      if (credentials && credentials['rs-uid'] && credentials['rs-email'] && credentials.Authorization) {
        const headers = new HttpHeaders({
          'rs-uid': credentials['rs-uid'],
          'rs-email': credentials['rs-email'],
          Authorization: `Bearer ${credentials?.Authorization}`,
        });
        return next(req.clone({ headers }));
      }

      return next(req);
    })
  );
};
