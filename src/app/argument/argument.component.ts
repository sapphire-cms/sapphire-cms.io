import {Component, Input} from '@angular/core';
import {Argument} from '../generated/cms/argument/argument.types';
import {MarkdownComponent} from 'ngx-markdown';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-argument',
  standalone: true,
  imports: [
    MarkdownComponent,
    NgClass
  ],
  templateUrl: './argument.component.html',
  styleUrl: './argument.component.css'
})
export class ArgumentComponent {

  @Input()
  public argument!: Argument;
}
