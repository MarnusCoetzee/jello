import { Routes } from '@angular/router';

export const dashboardRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./dashboard.component').then((m) => m.DashboardComponent),
    children: [
      // {
      //   path: '',
      //   pathMatch: 'full',
      //   loadComponent: () =>
      //     import('./home/home.component').then((m) => m.HomeComponent),
      // },
      // {
      //   path: 'about',
      //   loadComponent: () =>
      //     import('./about-us/about-us.component').then(
      //       (m) => m.AboutUsComponent
      //     ),
      // },
      // {
      //   path: 'contact',
      //   loadComponent: () =>
      //     import('./contact-us/contact-us.component').then(
      //       (m) => m.ContactUsComponent
      //     ),
      // },
    ],
  },
];
