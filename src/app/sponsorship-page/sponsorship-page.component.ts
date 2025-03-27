import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-sponsorship-page',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './sponsorship-page.component.html',
  styleUrl: './sponsorship-page.component.css'
})
export class SponsorshipPageComponent {
  public scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}
