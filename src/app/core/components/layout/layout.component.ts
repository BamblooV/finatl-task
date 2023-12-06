import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService, MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, ButtonModule, ToastModule, MenuModule],
  providers: [MessageService],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.items = [
      {
        items: [
          {
            label: 'Profile',
            icon: 'pi pi-user',
            routerLink: '/profile',
          },
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            command: () => {
              console.log('logout');
            },
          },
        ],
      },
    ];
  }
}
