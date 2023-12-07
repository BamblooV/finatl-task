import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Store } from '@ngrx/store';
import { EMPTY, Observable, catchError, map, of, switchMap, take, throwError } from 'rxjs';
import { selectUserInfo } from '../state/user.selectors';
import { UserInfo, UserInfoResponse } from '../types';

@Injectable({
  providedIn: 'root',
})
export class UserInfoApiService {
  private baseUrl = environment.baseApiUrl;

  fetchUserInfo(): Observable<UserInfo> {
    // Commented code for task checking locally
    // return of({});
    // return throwError(() => ({ type: 'InvalidFormDataException', message: 'Invalid multipart/form-data request' }));

    return this.store.select(selectUserInfo).pipe(
      take(1),
      switchMap(userInfo => {
        if (!userInfo) {
          return this.http.get<UserInfoResponse>(`${this.baseUrl}/profile`).pipe(
            map(response => ({
              email: response.email.S,
              name: response.name.S,
              uid: response.uid.S,
              createdAt: response.createdAt.S,
            }))
          );
        }

        return of(userInfo);
      }),
      catchError((response: HttpErrorResponse) => {
        if (response.status >= 500) {
          return throwError(() => ({ type: 'Unknown', message: 'Internal server error. Try later.' }));
        }

        return throwError(() => ({ type: response.error.type, message: response.error.message }));
      })
    );
  }

  updateUserName(name: string) {
    return this.http.put(`${this.baseUrl}/profile`, { name }).pipe(
      catchError((response: HttpErrorResponse) => {
        if (response.status >= 500) {
          return throwError(() => ({ type: 'Unknown', message: 'Internal server error. Try later.' }));
        }

        return throwError(() => ({ type: response.error.type, message: response.error.message }));
      })
    );
  }
  constructor(
    private readonly http: HttpClient,
    private readonly store: Store
  ) {}
}
