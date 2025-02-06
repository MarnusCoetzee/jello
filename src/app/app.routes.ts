import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/landing-page/landing-page.routes').then(
        (m) => m.landingPageRoutes
      ),
  },
  {
    path: 'auth',
    loadComponent() {
      return import('./features/auth/auth.component').then(
        (m) => m.AuthComponent
      );
    },
  },
  {
    path: 'dashboard',
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
