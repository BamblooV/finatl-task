import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth/login',
  },
  {
    path: 'auth',
    children: [
      {
        path: 'signup',
        loadComponent: () => import('@auth/components/signup/signup.component').then(mod => mod.SignupComponent),
      },
      {
        path: 'login',
        loadComponent: () => import('@auth/components/signup/signup.component').then(mod => mod.SignupComponent),
        // redirectTo: 'signup',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
