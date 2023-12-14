import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { take, tap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupsSelectors } from '../../state/groups';

@Component({
  selector: 'app-group-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './group-dialog.component.html',
  styleUrls: ['./group-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupDialogComponent {
  selectedGroupID = this.activatedRoute.snapshot.paramMap.get('groupID') || '';
  groups$ = this.store
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

  constructor(
    private readonly store: Store,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}
}
