import { Routes } from '@angular/router';
import { unAuthGuard } from './core/guards/un-auth/un-auth.guard';
import { authGuard } from './core/guards/auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [unAuthGuard],
    loadChildren: () =>
      import('./features/landing-page/landing-page.routes').then(
        (m) => m.landingPageRoutes
      ),
  },
  {
    path: 'auth',
    canActivate: [unAuthGuard],
    loadComponent() {
      return import('./features/auth/auth.component').then(
        (m) => m.AuthComponent
      );
    },
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent() {
      return import('./features/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      );
    },
  },
  {
    path: '**',
    redirectTo: 'landing-page',
  },
];
