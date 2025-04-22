import {Component, Input} from '@angular/core';
import {SponsorTier} from '../generated/cms/sponsor-tier/sponsor-tier.types';
import {DecimalPipe, NgClass, NgStyle} from '@angular/common';

@Component({
  selector: 'app-sponsor-tier-snippet',
  standalone: true,
  imports: [
    DecimalPipe,
    NgClass,
    NgStyle
  ],
  templateUrl: './sponsor-tier-snippet.component.html',
  styleUrl: './sponsor-tier-snippet.component.css'
})
export class SponsorTierSnippetComponent {

  @Input()
  public sponsorTier!: SponsorTier;

  @Input()
  public titleClass!: string;

  @Input()
  public imgHeight!: number;
}
