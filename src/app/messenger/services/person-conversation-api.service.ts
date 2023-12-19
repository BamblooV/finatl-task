import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable, map, catchError, throwError } from 'rxjs';
import { GetConversationMessagesResponse, Message } from '../types';

@Injectable({
  providedIn: 'root',
})
export class PersonConversationApiService {
  private baseUrl = environment.baseApiUrl;

  getMessages(conversationID: string, since?: number | null): Observable<{ messages: Message[] }> {
    let params = new HttpParams();
    params = params.append('conversationID', conversationID);
    if (since) {
      params = params.append('since', since);
    }

    return this.http.get<GetConversationMessagesResponse>(`${this.baseUrl}/conversations/read`, { params }).pipe(
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

  postMessage(conversationID: string, message: string) {
    return this.http.post(`${this.baseUrl}/conversations/append`, { conversationID, message }).pipe(
      catchError((response: HttpErrorResponse) => {
        if (response.status >= 500) {
          return throwError(() => ({ type: 'Unknown', message: 'Internal server error. Try later.' }));
        }

        return throwError(() => ({ type: response.error.type, message: response.error.message }));
      })
    );
  }

  deleteConversation(conversationID: string) {
    return this.http.delete(`${this.baseUrl}/conversations/delete`, { params: { conversationID } }).pipe(
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
