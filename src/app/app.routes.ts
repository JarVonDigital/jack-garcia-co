import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'Jack Garcia Co. | Home',
    loadComponent: () => import('./pages/home-page.component').then((m) => m.HomePageComponent),
  },
  {
    path: 'services',
    title: 'Jack Garcia Co. | Services',
    loadComponent: () => import('./pages/services-page.component').then((m) => m.ServicesPageComponent),
  },
  {
    path: 'about',
    title: 'Jack Garcia Co. | About',
    loadComponent: () => import('./pages/about-page.component').then((m) => m.AboutPageComponent),
  },
  {
    path: 'reviews',
    title: 'Jack Garcia Co. | Reviews',
    loadComponent: () => import('./pages/reviews-page.component').then((m) => m.ReviewsPageComponent),
  },
  {
    path: 'inquire',
    title: 'Jack Garcia Co. | Inquire',
    loadComponent: () => import('./pages/inquire-page.component').then((m) => m.InquirePageComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
