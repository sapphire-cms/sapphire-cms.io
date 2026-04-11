import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Layout} from '../generated/cms/layout/layout.types';
import {NgClass} from '@angular/common';
import {environment} from '../../environments/environment';

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

  protected managerUiUrl = environment.managerUiUrl;
}
