import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'Jack Garcia Co. | Home',
    loadComponent: () => import('./pages/home-page.component').then((m) => m.HomePageComponent),
  },
  {
    path: 'wedding-packages',
    title: 'Jack Garcia Co. | Wedding Packages',
    loadComponent: () =>
      import('./pages/wedding-packages-page.component').then((m) => m.WeddingPackagesPageComponent),
  },
  {
    path: 'about',
    title: 'Jack Garcia Co. | About',
    loadComponent: () => import('./pages/about-page.component').then((m) => m.AboutPageComponent),
  },
  {
    path: 'inquire',
    title: 'Jack Garcia Co. | Inquire',
    loadComponent: () =>
      import('./pages/inquire-page.component').then((m) => m.InquirePageComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
