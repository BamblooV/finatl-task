import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { UserInfoActions, UserInfoSelectors } from '../../state';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent implements OnInit, OnDestroy {
  destroy$ = new Subject<void>();
  userInfo$ = this.store.select(UserInfoSelectors.selectUserInfo).pipe(takeUntil(this.destroy$));
  loading$ = this.store.select(UserInfoSelectors.selectUserInfoLoading).pipe(takeUntil(this.destroy$));
  error$ = this.store.select(UserInfoSelectors.selectUserInfoError).pipe(takeUntil(this.destroy$));

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(UserInfoActions.fetchUserInfo());
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
