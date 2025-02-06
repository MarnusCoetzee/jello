import { Routes } from '@angular/router';

export const landingPageRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./landing-page.component').then((m) => m.LandingPageComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./about-us/about-us.component').then(
            (m) => m.AboutUsComponent
          ),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./contact-us/contact-us.component').then(
            (m) => m.ContactUsComponent
          ),
      },
    ],
  },
];
