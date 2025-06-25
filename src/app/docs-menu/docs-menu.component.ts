import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import docsMenu_default from '../generated/cms/docs-menu/docs-menu';

@Component({
  selector: 'app-docs-menu',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './docs-menu.component.html',
  styleUrl: './docs-menu.component.css'
})
export class DocsMenuComponent {
  protected readonly menu = docsMenu_default;

  protected refToRoute(docRef: string): string {
    return '/' + docRef.split(':')[0];
  }
}
