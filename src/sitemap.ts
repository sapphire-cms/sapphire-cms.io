import '@angular/compiler';
import {routes, SitemapRouteData} from './app/app.routes';
import {Eta} from 'eta';
import path from 'path';
import {writeFileSync} from 'fs';
import {DateTime} from 'luxon';
import {Routes} from '@angular/router';

interface Location {
  path: string;
  priority?: string;
  changefreq?: string;
}

const templatesDir = path.join(__dirname);
const sitemapFile = path.join(__dirname, 'sitemap.xml');

const root = 'https://sapphire-cms.io';

const locs = locations(root, routes);

const now = DateTime.now().toFormat("yyyy-LL-dd'T'HH:mm:ssZZ");

const eta = new Eta({ views: templatesDir });
const res = eta.render('./sitemap', {
  lastmod: now,
  locations: locs
});
writeFileSync(sitemapFile, res);

function locations(root: string, routes: Routes): Location[] {
  const locs: Location[] = [];

  for (let route of routes) {
    if (route.redirectTo) {
      continue;
    }

    if (route.component && route.component && !route.children) {
      const data = route.data as SitemapRouteData;

      locs.push({
        path: root + (route.path ? '/' + route.path : ''),
        priority: data.priority?.toFixed(1),
        changefreq: data.changefreq,
      });
    }

    if (route.children) {
      const childLocs = locations(root + '/' + route.path, route.children);
      locs.push(...childLocs);
    }
  }

  return locs;
}
