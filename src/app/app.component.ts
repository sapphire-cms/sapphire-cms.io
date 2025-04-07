import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {MainHeroComponent} from './main-hero/main-hero.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactFormComponent, NavbarComponent, FooterComponent, MainHeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
