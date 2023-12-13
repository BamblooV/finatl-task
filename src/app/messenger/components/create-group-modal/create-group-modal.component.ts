import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { getErrorMessageFactory } from '@shared/utils/getErrorMessageFactory';
import { MessagesModule } from 'primeng/messages';
import { Store } from '@ngrx/store';
import { combineLatest, take } from 'rxjs';
import { GroupsActions, GroupsSelectors } from '../../state/groups';

@Component({
  selector: 'app-create-group-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DialogModule, ButtonModule, InputTextModule, MessagesModule],
  templateUrl: './create-group-modal.component.html',
  styleUrls: ['./create-group-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateGroupModalComponent {
  private errorMessages: Record<string, string> = {
    required: 'Field is required',
    maxlength: 'Name max length is 30 characters',
    pattern: 'Name should consist of letters, numbers and spaces',
  };
  @Input() visible = false;
  @Output() closeModal = new EventEmitter<void>();

  loading$ = this.store.select(GroupsSelectors.selectGroupsLoading);
  error$ = this.store.select(GroupsSelectors.selectGroupsError);

  control = new FormControl('', [
    Validators.required,
    Validators.maxLength(30),
    Validators.pattern(/^[A-Za-z0-9\s]*$/),
  ]);

  onCancel() {
    this.closeModal.emit();
    this.control.reset();
  }

  onSubmit() {
    if (this.control.valid && this.control.value) {
      this.store.dispatch(GroupsActions.createGroup({ name: this.control.value }));

      combineLatest({ error: this.error$, loading: this.loading$ })
        .pipe(take(2))
        .subscribe({
          next: ({ error, loading }) => {
            if (!loading && error === null) {
              this.closeModal.emit();
              this.control.reset();
            }
          },
        });
    }
  }

  getErrorMessage = getErrorMessageFactory(this.errorMessages);

  constructor(private readonly store: Store) {}
}
