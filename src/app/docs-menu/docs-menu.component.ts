import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

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

}
