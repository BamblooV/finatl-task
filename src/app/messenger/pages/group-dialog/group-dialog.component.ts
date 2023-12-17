import { AfterViewChecked, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { forkJoin, map, startWith, switchMap, take, tap, timer } from 'rxjs';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { concatLatestFrom } from '@ngrx/effects';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { AuthSelectors } from '@auth/state';
import { GroupsActions, GroupsSelectors } from '../../state/groups';
import { GroupDialogActions, GroupDialogSelectors } from '../../state/group-dialog';
import { UsersSelectors } from '../../state/users';

@Component({
  selector: 'app-group-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, ButtonModule, InputTextareaModule, ConfirmDialogModule],
  templateUrl: './group-dialog.component.html',
  styleUrls: ['./group-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ConfirmationService],
})
export class GroupDialogComponent implements OnInit, AfterViewChecked {
  @ViewChild('messageList') private messageList!: ElementRef;

  selectedGroupID = this.activatedRoute.snapshot.paramMap.get('groupID') || '';
  messages$ = this.store
    .select(GroupDialogSelectors.selectGroupMessages(this.selectedGroupID))
    .pipe(tap(() => this.scrollToBottom()));
  loading$ = forkJoin([
    this.store.select(GroupDialogSelectors.selectLoading),
    this.store.select(GroupsSelectors.selectGroupsLoading),
  ]).pipe(
    map(loadings => {
      return loadings.some(value => value);
    })
  );
  error$ = this.store.select(GroupDialogSelectors.selectError);

  isGroupOwner$ = this.store.select(GroupsSelectors.selectGroup(this.selectedGroupID)).pipe(
    concatLatestFrom(() => this.store.select(AuthSelectors.selectAuthID)),
    map(([group, userID]) => {
      return group?.createdBy === userID;
    })
  );

  userID$ = this.store.select(AuthSelectors.selectAuthID);

  timeDelay$ = this.store.select(GroupDialogSelectors.selectLastUpdateTime).pipe(
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

  inputControl = new FormControl('', [Validators.required]);

  updateMessages() {
    this.store.dispatch(GroupDialogActions.updateMessages({ groupID: this.selectedGroupID }));
  }

  deleteGroup() {
    this.confirmationService.confirm({
      message: 'Do you want to delete your group?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.store.dispatch(GroupsActions.deleteGroup({ groupID: this.selectedGroupID }));
        this.router.navigateByUrl('/');
      },
    });
  }

  onSubmit() {
    if (this.inputControl.invalid) return;

    if (!this.inputControl.value) return;

    this.store.dispatch(
      GroupDialogActions.sendMessage({ groupID: this.selectedGroupID, message: this.inputControl.value })
    );
    this.inputControl.reset();
  }

  getUsername$(userID: string) {
    return this.store.select(UsersSelectors.selectUserByID(userID));
  }

  scrollToBottom(): void {
    try {
      this.messageList.nativeElement.scrollTop = this.messageList.nativeElement.scrollHeight;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log('error while scroll to bottom');
    }
  }

  constructor(
    private readonly store: Store,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly confirmationService: ConfirmationService
  ) {
    this.store
      .select(GroupsSelectors.selectGroups)
      .pipe(
        take(1),
        tap(groups => {
          if (!groups || !Object.hasOwn(groups, this.selectedGroupID)) {
            this.router.navigateByUrl('not-found', { skipLocationChange: true });
          }
        })
      )
      .subscribe();
  }

  ngOnInit(): void {
    this.store.dispatch(GroupDialogActions.fetchMessages({ groupID: this.selectedGroupID }));
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }
}
