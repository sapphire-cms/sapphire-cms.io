import {Component, Input} from '@angular/core';
import {MarkdownComponent} from 'ngx-markdown';
import {NgClass} from '@angular/common';
import {Feature} from '../generated/cms/feature/feature.types';

@Component({
  selector: 'app-cms-feature',
  standalone: true,
  imports: [
    MarkdownComponent,
    NgClass
  ],
  templateUrl: './cms-feature.component.html',
  styleUrl: './cms-feature.component.css'
})
export class CmsFeatureComponent {

  @Input()
  public feature!: Feature;
}
