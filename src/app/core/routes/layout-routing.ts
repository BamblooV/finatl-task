import { Route } from '@angular/router';
import { LayoutComponent } from '../components/layout/layout.component';

export default [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('@messenger/pages/chats-list/chats-list.component').then(mod => mod.ChatsListComponent),
      },
      {
        path: 'group/:groupID',
        loadComponent: () =>
          import('@messenger/pages/group-dialog/group-dialog.component').then(mod => mod.GroupDialogComponent),
      },
      {
        path: 'profile',
        loadComponent: () => import('@user/components/profile/profile.component').then(mod => mod.ProfileComponent),
      },
    ],
  },
] satisfies Route[];
