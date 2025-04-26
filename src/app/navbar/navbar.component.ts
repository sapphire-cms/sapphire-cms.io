import {Component, Input} from '@angular/core';
import {NavigationStart, Router, RouterLink} from '@angular/router';
import {Layout} from '../generated/cms/layout/layout.types';
import {NgClass} from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    NgClass,
    HttpClientModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {

  @Input()
  public layout!: Layout;

  public menuOpen = false;

  public latestVersion = '';

  constructor(router: Router, http: HttpClient) {
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        this.menuOpen = false;
      }
    });

    const url = 'https://registry.npmjs.org/@sapphire-cms/core/latest';
    http.get<any>(url).subscribe(data => {
      this.latestVersion = data.version;
    });
  }

  public toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
