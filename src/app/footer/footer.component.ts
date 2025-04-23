import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Layout} from '../generated/cms/layout/layout.types';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterLink,
    NgClass,
  ],
  templateUrl: './footer.component.html',
})
export class FooterComponent {

  @Input()
  public layout!: Layout;
}
