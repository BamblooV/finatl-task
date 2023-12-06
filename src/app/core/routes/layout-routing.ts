import { Route } from '@angular/router';
import { LayoutComponent } from '../components/layout/layout.component';

export default [
  {
    path: '',
    pathMatch: 'full',
    component: LayoutComponent,
    children: [],
  },
] satisfies Route[];
