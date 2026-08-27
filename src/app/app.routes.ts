import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'Florida Wedding & Portrait Photographer | Jack Garcia & Co.',
    data: {
      seo: {
        title: 'Florida Wedding & Portrait Photographer | Jack Garcia & Co.',
        description:
          'Jack Garcia & Co. creates editorial wedding, engagement, family, and milestone photography across Florida.',
      },
    },
    loadComponent: () => import('./pages/home-page.component').then((m) => m.HomePageComponent),
  },
  {
    path: 'wedding-packages',
    title: 'Wedding Photography Packages in Florida | Jack Garcia & Co.',
    data: {
      seo: {
        title: 'Wedding Photography Packages in Florida | Jack Garcia & Co.',
        description:
          'Explore wedding photography collections from Jack Garcia & Co., including engagement sessions, second-photographer coverage, and high-resolution galleries.',
      },
    },
    loadComponent: () =>
      import('./pages/wedding-packages-page.component').then((m) => m.WeddingPackagesPageComponent),
  },
  {
    path: 'about',
    title: 'About Jack Garcia | Florida Wedding Photographer',
    data: {
      seo: {
        title: 'About Jack Garcia | Florida Wedding Photographer',
        description:
          'Meet Jack Garcia, a Florida photographer creating natural, editorial images for weddings, couples, families, and milestones.',
      },
    },
    loadComponent: () => import('./pages/about-page.component').then((m) => m.AboutPageComponent),
  },
  {
    path: 'inquire',
    title: 'Inquire for Wedding Photography | Jack Garcia & Co.',
    data: {
      seo: {
        title: 'Inquire for Wedding Photography | Jack Garcia & Co.',
        description:
          'Inquire with Jack Garcia & Co. for Florida wedding, engagement, portrait, and milestone photography.',
      },
    },
    loadComponent: () =>
      import('./pages/inquire-page.component').then((m) => m.InquirePageComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
