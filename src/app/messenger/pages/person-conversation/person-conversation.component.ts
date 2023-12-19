import { AfterViewChecked, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { ConfirmationService } from 'primeng/api';
import { forkJoin, map, startWith, switchMap, take, tap, timer } from 'rxjs';
import { AuthSelectors } from '@auth/state';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ConversationActions, ConversationSelectors } from '../../state/person-conversation';
import { UsersSelectors } from '../../state/users';

@Component({
  selector: 'app-person-conversation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, ButtonModule, InputTextareaModule, ConfirmDialogModule],
  templateUrl: './person-conversation.component.html',
  styleUrls: ['./person-conversation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ConfirmationService],
})
export class PersonConversationComponent implements OnInit, AfterViewChecked {
  @ViewChild('messageList') private messageList!: ElementRef;

  selectedConversationID = this.activatedRoute.snapshot.paramMap.get('conversationID') || '';
  messages$ = this.store
    .select(ConversationSelectors.selectConversationMessages(this.selectedConversationID))
    .pipe(tap(() => this.scrollToBottom()));

  loading$ = forkJoin([
    this.store.select(ConversationSelectors.selectLoading),
    this.store.select(UsersSelectors.selectUsersLoading),
  ]).pipe(
    map(loadings => {
      return loadings.some(value => value);
    })
  );
  error$ = this.store.select(ConversationSelectors.selectError);

  userID$ = this.store.select(AuthSelectors.selectAuthID);

  timeDelay$ = this.store.select(ConversationSelectors.selectLastUpdateTime).pipe(
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
    this.store.dispatch(ConversationActions.updateMessages({ conversationID: this.selectedConversationID }));
  }

  deleteConversation() {
    this.confirmationService.confirm({
      message: 'Do you want to delete conversation?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.store.dispatch(ConversationActions.deleteConversation({ conversationID: this.selectedConversationID }));
      },
    });
  }

  onSubmit() {
    if (this.inputControl.invalid) return;

    if (!this.inputControl.value) return;

    this.store.dispatch(
      ConversationActions.sendMessage({ conversationID: this.selectedConversationID, message: this.inputControl.value })
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
  ) {}

  ngOnInit(): void {
    this.store.dispatch(ConversationActions.fetchMessages({ conversationID: this.selectedConversationID }));
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }
}
