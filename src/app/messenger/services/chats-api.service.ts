import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { environment } from '@env/environment';
import { Observable, catchError, forkJoin, map, of, switchMap, take, throwError } from 'rxjs';
import { GetGroupsResponse } from '../types/get-groups-response.model';
import { GroupsSelectors } from '../state/groups';
import {
  GetConversationsResponse,
  GetPersonsResponse,
  Group,
  Person,
  PostConversationResponse,
  PostGroupResponse,
} from '../types';
import { UsersSelectors } from '../state/users';

@Injectable({
  providedIn: 'root',
})
export class ChatsApiService {
  private baseUrl = environment.baseApiUrl;

  fetchGroups(): Observable<{ groups: Group[]; count: number }> {
    return this.store.select(GroupsSelectors.selectGroupsAndCount).pipe(
      take(1),
      catchError(() => {
        return throwError(() => ({ type: 'Unknown', message: 'NGRX error.' }));
      }),
      switchMap(([groups, count]) => {
        if (!groups?.length) {
          return this.updateGroups();
        }

        return of({ groups, count });
      })
    );
  }

  updateGroups(): Observable<{ groups: Group[]; count: number }> {
    return this.http.get<GetGroupsResponse>(`${this.baseUrl}/groups/list`).pipe(
      map(response => ({
        count: response.Count,
        groups: response.Items.map(group => ({
          id: group.id.S,
          name: group.name.S,
          createdAt: parseInt(group.createdAt.S, 10),
          createdBy: group.createdBy.S,
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

  createGroup(name: string): Observable<PostGroupResponse> {
    return this.http.post<PostGroupResponse>(`${this.baseUrl}/groups/create`, { name }).pipe(
      catchError((response: HttpErrorResponse) => {
        if (response.status >= 500) {
          return throwError(() => ({ type: 'Unknown', message: 'Internal server error. Try later.' }));
        }

        return throwError(() => ({ type: response.error.type, message: response.error.message }));
      })
    );
  }

  deleteGroup(groupID: string) {
    return this.http.delete(`${this.baseUrl}/groups/delete?groupID=${groupID}`).pipe(
      catchError((response: HttpErrorResponse) => {
        if (response.status >= 500) {
          return throwError(() => ({ type: 'Unknown', message: 'Internal server error. Try later.' }));
        }

        return throwError(() => ({ type: response.error.type, message: response.error.message }));
      })
    );
  }

  fetchUsers(): Observable<{ count: number; users: Person[] }> {
    return this.store.select(UsersSelectors.selectUsersAndCount).pipe(
      take(1),
      catchError(() => {
        return throwError(() => ({ type: 'Unknown', message: 'NGRX error.' }));
      }),
      switchMap(([users, count]) => {
        if (!users || !count) {
          return this.updateUsers();
        }

        return of({ count, users });
      })
    );
  }

  updateUsers(): Observable<{ count: number; users: Person[] }> {
    return forkJoin({
      usersResponse: this.http.get<GetPersonsResponse>(`${this.baseUrl}/users`),
      conversationsResponse: this.http.get<GetConversationsResponse>(`${this.baseUrl}/conversations/list`),
    }).pipe(
      map(({ usersResponse, conversationsResponse }) => {
        const userConversationTable: Record<string, string> = {};

        conversationsResponse.Items.forEach(conversation => {
          userConversationTable[conversation.companionID.S] = conversation.id.S;
        });

        return {
          count: usersResponse.Count,
          users: usersResponse.Items.map(person => ({
            name: person.name.S,
            uid: person.uid.S,
            conversationID: userConversationTable[person.uid.S] || null,
          })),
        };
      }),
      catchError((response: HttpErrorResponse) => {
        if (response.status >= 500) {
          return throwError(() => ({ type: 'Unknown', message: 'Internal server error. Try later.' }));
        }

        return throwError(() => ({ type: response.error.type, message: response.error.message }));
      })
    );
  }

  createConversation(companion: string): Observable<PostConversationResponse> {
    return this.http.post<PostConversationResponse>(`${this.baseUrl}/conversations/create`, { companion }).pipe(
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
