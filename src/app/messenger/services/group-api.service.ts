import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable, catchError, map, throwError } from 'rxjs';
import { GetGroupDialogResponse, Message } from '../types';

@Injectable({
  providedIn: 'root',
})
export class GroupApiService {
  private baseUrl = environment.baseApiUrl;
  getMessages(groupID: string, since?: number | null): Observable<{ messages: Message[] }> {
    let params = new HttpParams();
    params = params.append('groupID', groupID);
    if (since) {
      params = params.append('since', since);
    }

    return this.http.get<GetGroupDialogResponse>(`${this.baseUrl}/groups/read`, { params }).pipe(
      map(response => ({
        messages: response.Items.map(responseMessage => ({
          authorID: responseMessage.authorID.S,
          message: responseMessage.message.S,
          createdAt: parseInt(responseMessage.createdAt.S, 10),
        })),
      })),
      catchError((response: HttpErrorResponse) => {
        if (response.status >= 500) {
          return throwError(() => ({ type: 'Unknown', message: 'Internal server error. Try later.' }));
        }

        return throwError(() => ({ type: response.error.type, message: response.error.message }));
      })
    );
  }

  postMessage(groupID: string, message: string) {
    return this.http.post(`${this.baseUrl}/groups/append`, { groupID, message }).pipe(
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
