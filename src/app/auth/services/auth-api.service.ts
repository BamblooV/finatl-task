import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { catchError, of, throwError } from 'rxjs';
import { UserCredentials } from '../types';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  private baseUrl = environment.baseApiUrl;

  registerUser(credentials: UserCredentials) {
    // Commented code for task checking locally
    // return of({});
    // return throwError(() => ({ type: 'InvalidFormDataException', message: 'Invalid multipart/form-data request' }));

    return this.http.post(`${this.baseUrl}/registration`, credentials).pipe(
      catchError((response: HttpErrorResponse) => {
        if (response.status >= 500) {
          return throwError(() => ({ type: 'Unknown', message: 'Internal server error. Try later.' }));
        }

        return throwError(() => ({ type: response.error.type, message: response.error.message }));
      })
    );
  }

  constructor(private readonly http: HttpClient) {}
}
