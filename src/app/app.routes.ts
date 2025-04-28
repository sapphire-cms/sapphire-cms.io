import { Routes } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {SponsorshipPageComponent} from './sponsorship-page/sponsorship-page.component';
import {DocsComponent} from './docs/docs.component';

export interface SitemapRouteData {
  /**
   * Example Values:
   * 1.0: Critical pages (e.g., homepage, landing pages).
   * 0.8: Important pages (e.g., key product pages, high-traffic content).
   * 0.5: Standard pages (e.g., blog posts, news articles).
   * 0.3: Less important pages (e.g., FAQ, archived content).
   * 0.1: Least important or auxiliary pages (e.g., legal notices, terms and conditions).
   */
  priority?: number;

  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
}

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    component: HomePageComponent,
    title: 'Sapphire CMS - A progressive headless CMS for a serverless world.',
    data: {
      priority: 1.0,
      changefreq: 'monthly',
      description: 'Sapphire CMS is a next-generation, open-source headless CMS designed from the ground up for serverless and edge environments. With a tiny core, plug-in modular architecture, and powerful features like channel-specific content shaping, visual editing, and instant delivery to CDNs or edge databases — it’s the CMS that scales with your content, your stack, and your ambitions.',
    }
  },
  {
    path: 'sponsorship',
    component: SponsorshipPageComponent,
    title: 'Support Sapphire CMS – Become a Sponsor and Shape the Future',
    data: {
      priority: 0.8,
      changefreq: 'monthly',
      description: 'Join Sapphire CMS as a partner and help shape the next generation of headless, serverless content infrastructure. Gain visibility, influence, and early access.',
    }
  },
  {
    path: 'docs',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'getting-started/introduction',
      },
      {
        path: '**',
        component: DocsComponent,
        title: 'Support Sapphire CMS – Docs',
        data: {
          priority: 0.8,
          changefreq: 'monthly',
        }
      }
    ],
  },

];
