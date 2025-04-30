import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {DocsService} from '../docs.service';
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
  public readonly menu = docsMenu_default;

  constructor(private readonly docsService: DocsService) {
  }

  refToTitle(ref: string): string {
    return this.docsService.refToTitle(ref);
  }
}
