import { Route } from '@angular/router';
import { LayoutComponent } from '../components/layout/layout.component';

export default [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'profile',
        loadComponent: () => import('@user/components/profile/profile.component').then(mod => mod.ProfileComponent),
      },
    ],
  },
] satisfies Route[];
