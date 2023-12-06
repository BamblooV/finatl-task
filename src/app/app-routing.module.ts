import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isAuthGuard } from './core/guards/is-auth.guard';
import { isLoggedOutGuard } from './core/guards/is-logged-out.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('@core/routes/layout-routing'),
    canActivate: [isAuthGuard],
  },
  {
    path: 'auth',
    canActivate: [isLoggedOutGuard],
    children: [
      {
        path: 'signup',
        loadComponent: () => import('@auth/components/signup/signup.component').then(mod => mod.SignupComponent),
      },
      {
        path: 'login',
        loadComponent: () => import('@auth/components/login/login.component').then(mod => mod.LoginComponent),
      },
    ],
  },
  {
    path: '404',
    loadComponent: () => import('@core/pages/not-found/not-found.component').then(mod => mod.NotFoundComponent),
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
