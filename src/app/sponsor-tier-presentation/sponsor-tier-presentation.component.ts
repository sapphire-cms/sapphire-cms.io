import {Component, Input, OnInit} from '@angular/core';
import {SponsorTier} from '../generated/cms/sponsor-tier/sponsor-tier.types';
import {marked, Renderer} from 'marked';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-sponsor-tier-presentation',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './sponsor-tier-presentation.component.html',
  styleUrl: './sponsor-tier-presentation.component.css'
})
export class SponsorTierPresentationComponent implements OnInit {

  @Input()
  public sponsorTier!: SponsorTier;

  @Input()
  public contentClass = '';

  @Input()
  public highlightClass!: string;

  public renderedHtml = '';

  private readonly localRenderer = new Renderer();

  constructor() {
    this.localRenderer.strong = token => {
      return `<strong class="${this.highlightClass}">${token}</strong>`;
    }

    this.localRenderer.heading = (text, depth, raw) => {
      if (raw.match(/^\(.*\)$/)) {
        return `<h5 class="subtitle is-6 has-text-grey-light">${text}</h5>`;
      }

      if (depth === 5) {
        return `<h5 class="subtitle is-5 mt-5 ${this.contentClass}">${text}</h5>`;
      } else {
        return `<h${depth} class="title is-${depth} ${this.highlightClass}">${text}</h${depth}>`;
      }
    }
  }

  async ngOnInit() {
    this.renderedHtml = await marked(this.sponsorTier.description, { renderer: this.localRenderer });
  }
}
