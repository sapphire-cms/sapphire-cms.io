import { Routes } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {SponsorshipPageComponent} from './sponsorship-page/sponsorship-page.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'sponsorship',
    component: SponsorshipPageComponent,
  }
];
