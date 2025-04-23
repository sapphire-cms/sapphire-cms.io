import {Component, Input} from '@angular/core';
import {NavigationStart, Router, RouterLink} from '@angular/router';
import {Layout} from '../generated/cms/layout/layout.types';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    NgClass
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {

  @Input()
  public layout!: Layout;

  public menuOpen = false;

  constructor(router: Router) {
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        this.menuOpen = false;
      }
    });
  }

  public toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
