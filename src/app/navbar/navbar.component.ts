import { Component } from '@angular/core';
import {NavigationStart, Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
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
