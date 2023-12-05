import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { filter } from 'rxjs';
import { selectAuthError, selectAuthLoading } from '../../state/auth.selectors';
import { LoginCredentials } from '../../types';
import { AuthActions } from '../../state';

@Component({
  selector: 'app-login',
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
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private errorMessages: Record<string, string> = {
    required: 'Field is required',
    email: 'Incorrect email',
    notFound: 'Unknown email or password',
  };

  isLoading$ = this.store.select(selectAuthLoading);
  emailError$ = this.store
    .select(selectAuthError)
    .pipe(filter(error => error?.type === 'NotFoundException'))
    .subscribe({
      next: () => {
        this.form.setErrors({ notFound: true });
      },
    });

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  get emailControl() {
    return this.form.get('email');
  }

  get passwordControl() {
    return this.form.get('password');
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

    const { email, password } = this.form.value;

    if (!email || !password) return;

    const userCreds: LoginCredentials = {
      email,
      password,
    };

    console.log(userCreds);

    this.store.dispatch(AuthActions.loginUser({ credentials: userCreds }));
  }

  constructor(
    private readonly fb: FormBuilder,
    private readonly store: Store
  ) {}
}
