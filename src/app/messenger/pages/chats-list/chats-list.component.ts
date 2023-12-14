import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { GroupsListComponent } from '../../components/groups-list/groups-list.component';
import { UsersListComponent } from '../../components/users-list/users-list.component';

@Component({
  selector: 'app-chats-list',
  standalone: true,
  imports: [CommonModule, GroupsListComponent, UsersListComponent, DividerModule],
  templateUrl: './chats-list.component.html',
  styleUrls: ['./chats-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatsListComponent {}
