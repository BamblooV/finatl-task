import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UniqueEmailValidator, passwordMatchesValidator, passwordStrengthValidator } from '@core/validators';
import { Store } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { Subject, filter, takeUntil } from 'rxjs';
import { AuthActions } from '../../state';
import { UserCredentials } from '../../types';
import { selectAuthError, selectAuthLoading } from '../../state/auth.selectors';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    DividerModule,
    InputTextModule,
    MessagesModule,
    RouterLink,
    PasswordModule,
    ToastModule,
  ],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupComponent implements OnDestroy {
  private errorMessages: Record<string, string> = {
    required: 'Field is required',
    maxlength: 'Name max length is 40 characters',
    pattern: 'Name should consist of letters and spaces',
    email: 'Incorrect email',
    passwordStrength:
      // eslint-disable-next-line max-len
      'Password should be at least 8 characters, has a uppercase letter, has a mixture of letters and numbers and include at least one special character, e.g., ! @ # ? ]',
    confirmPassword: 'Passwords should match',
    emailExist: 'Email already taken',
  };

  destroy$ = new Subject<void>();
  isLoading$ = this.store.select(selectAuthLoading);
  emailError$ = this.store
    .select(selectAuthError)
    .pipe(
      takeUntil(this.destroy$),
      filter(error => error?.type === 'PrimaryDuplicationException')
    )
    .subscribe({
      next: () => {
        this.emailControl?.setErrors({ emailExist: true });
      },
    });

  form = this.fb.group(
    {
      name: ['', [Validators.required, Validators.maxLength(40), Validators.pattern(/^[a-zA-Z\s]+$/)]],
      email: ['', [Validators.required, Validators.email], [this.uniqueEmail.validate.bind(this.uniqueEmail)]],
      password: ['', [Validators.required, passwordStrengthValidator]],
      confirmPassword: ['', [Validators.required]],
    },
    {
      updateOn: 'change',
      validators: [passwordMatchesValidator],
    }
  );

  get nameControl() {
    return this.form.get('name');
  }
  get emailControl() {
    return this.form.get('email');
  }
  get passwordControl() {
    return this.form.get('password');
  }
  get confirmPasswordControl() {
    return this.form.get('confirmPassword');
  }

  getErrorMessage(control: AbstractControl | null): string {
    if (!control) return '';
    if (!control.errors) return '';

    const errorKey = Object.keys(control.errors)[0];

    if (errorKey && this.errorMessages[errorKey]) {
      return this.errorMessages[errorKey] || 'Wrong value';
    }

    return 'Wrong value';
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    const { email, name, password } = this.form.value;

    if (!email || !name || !password) return;

    const userCreds: UserCredentials = {
      email,
      name,
      password,
    };

    this.store.dispatch(AuthActions.registerUser({ credentials: userCreds }));
  }

  constructor(
    private readonly fb: FormBuilder,
    private readonly store: Store,
    private readonly uniqueEmail: UniqueEmailValidator
  ) {}

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
