import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-main-hero',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './main-hero.component.html',
  styleUrl: './main-hero.component.css'
})
export class MainHeroComponent {

}
