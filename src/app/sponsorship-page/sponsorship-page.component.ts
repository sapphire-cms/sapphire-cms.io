import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {SponsorTierSnippetComponent} from '../sponsor-tier-snippet/sponsor-tier-snippet.component';
import {SponsorTierPresentationComponent} from '../sponsor-tier-presentation/sponsor-tier-presentation.component';
import {sponsorTier} from "../generated/cms/sponsor-tier";

@Component({
  selector: 'app-sponsorship-page',
  standalone: true,
  imports: [
    RouterLink,
    SponsorTierSnippetComponent,
    SponsorTierPresentationComponent
  ],
  templateUrl: './sponsorship-page.component.html',
  styleUrl: './sponsorship-page.component.css'
})
export class SponsorshipPageComponent {
  public readonly sponsorTier = sponsorTier;
}
