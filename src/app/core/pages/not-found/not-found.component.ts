import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Store } from '@ngrx/store';
import { AuthSelectors } from '../../../auth/state';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {
  url = this.document.location.href;

  uid$ = this.store.select(AuthSelectors.selectAuthID);

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly store: Store
  ) {}
}
