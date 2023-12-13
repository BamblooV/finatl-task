import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Store } from '@ngrx/store';
import { map, switchMap, startWith, take, timer } from 'rxjs';
import { UsersActions, UsersSelectors } from '../../state/users';
import { Person } from '../../types';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule],
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent implements OnInit {
  users$ = this.store.select(UsersSelectors.selectUsers);

  loading$ = this.store.select(UsersSelectors.selectUsersLoading);
  timeDelay$ = this.store.select(UsersSelectors.selectUsersLastFetchTime).pipe(
    // eslint-disable-next-line @ngrx/avoid-mapping-selectors
    map(lastFetchTime => {
      if (!lastFetchTime) return 0;

      const lastFetchTimeSeconds = Math.round(lastFetchTime / 1000);
      const currentTime = Math.round(Date.now() / 1000);

      return Math.max(60 - (currentTime - lastFetchTimeSeconds), 0);
    })
  );
  countDown$ = this.timeDelay$.pipe(
    switchMap(secondsLeft =>
      timer(0, 1000).pipe(
        startWith(0),
        take(secondsLeft + 2),
        map(timePassed => secondsLeft - timePassed)
      )
    )
  );

  trackByFn(index: number, person: Person) {
    return person.uid;
  }

  updateUsers() {
    this.store.dispatch(UsersActions.updateUsers());
  }

  onUserClick(user: Person) {
    if (user.conversationID === null) {
      this.store.dispatch(UsersActions.createConversation({ companion: user.uid }));
    } else {
      this.router.navigate(['conversation', user.conversationID]);
    }
  }

  constructor(
    private readonly store: Store,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.store.dispatch(UsersActions.fetchUsers());
  }
}
