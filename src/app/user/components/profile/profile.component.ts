import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Subject, takeUntil, tap } from 'rxjs';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { getErrorMessageFactory } from '@shared/utils/getErrorMessageFactory';
import { UserInfoActions, UserInfoSelectors } from '../../state';

export type ComponentModes = 'edit' | 'view';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ButtonModule, InputTextModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent implements OnInit, OnDestroy {
  private errorMessages: Record<string, string> = {
    required: 'Field is required',
    maxlength: 'Name max length is 40 characters',
    pattern: 'Name should consist of letters and spaces',
  };

  mode: ComponentModes = 'view';

  name: FormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(40),
    Validators.pattern(/^[a-zA-Z\s]+$/),
  ]);

  destroy$ = new Subject<void>();
  userInfo$ = this.store.select(UserInfoSelectors.selectUserInfo).pipe(
    takeUntil(this.destroy$),
    tap(userInfo => {
      this.name = new FormControl(userInfo?.name || '', {
        validators: [Validators.required, Validators.maxLength(40), Validators.pattern(/^[a-zA-Z\s]+$/)],
        nonNullable: true,
      });
    })
  );
  loading$ = this.store.select(UserInfoSelectors.selectUserInfoLoading).pipe(takeUntil(this.destroy$));
  error$ = this.store.select(UserInfoSelectors.selectUserInfoError).pipe(takeUntil(this.destroy$));

  private changeMode(nextMode: ComponentModes) {
    this.mode = nextMode;
  }

  setEditMode() {
    this.changeMode('edit');
  }

  setViewMode() {
    this.changeMode('view');
    this.name.reset();
  }

  getErrorMessage = getErrorMessageFactory(this.errorMessages);

  editUserInfo() {
    if (this.name.invalid) return;

    this.store.dispatch(UserInfoActions.updateUserName({ name: this.name.value }));
  }

  logout() {
    // this.store.dispatch()
  }

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(UserInfoActions.fetchUserInfo());
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
