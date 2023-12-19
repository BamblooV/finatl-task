import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { Store } from '@ngrx/store';
import { map, startWith, switchMap, take, timer } from 'rxjs';
import { RouterModule } from '@angular/router';
import { GroupsActions, GroupsSelectors } from '../../state/groups';
import { AuthSelectors } from '../../../auth/state';
import { Group } from '../../types';
import { CreateGroupModalComponent } from '../create-group-modal/create-group-modal.component';

@Component({
  selector: 'app-groups-list',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule, CreateGroupModalComponent, ConfirmDialogModule],
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ConfirmationService],
})
export class GroupsListComponent implements OnInit {
  myID$ = this.store.select(AuthSelectors.selectAuthID);
  groups$ = this.store.select(GroupsSelectors.selectGroups);

  loading$ = this.store.select(GroupsSelectors.selectGroupsLoading);
  timeDelay$ = this.store.select(GroupsSelectors.selectGroupsLastFetchTime).pipe(
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

  modalIsOpen = false;

  trackByFn(index: number, { key }: { key: string; value: Group }) {
    return key;
  }

  updateGroups() {
    this.store.dispatch(GroupsActions.updateGroups());
  }

  openModal() {
    this.modalIsOpen = true;
  }

  closeModal() {
    this.modalIsOpen = false;
  }

  deleteGroup(groupID: string) {
    this.confirmationService.confirm({
      message: 'Do you want to delete your group?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.store.dispatch(GroupsActions.deleteGroup({ groupID }));
      },
    });
  }

  constructor(
    private readonly store: Store,
    private readonly confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(GroupsActions.fetchGroups());
  }
}
