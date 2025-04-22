import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {SponsorTierSnippetComponent} from '../sponsor-tier-snippet/sponsor-tier-snippet.component';
import quartz_default from '../generated/cms/sponsor-tier/quartz';
import amethyst_default from '../generated/cms/sponsor-tier/amethyst';
import ruby_default from '../generated/cms/sponsor-tier/ruby';
import diamond_default from '../generated/cms/sponsor-tier/diamond';
import obsidian_default from '../generated/cms/sponsor-tier/obsidian';
import quartzTier from '../generated/cms/sponsor-tier/quartz';
import {DecimalPipe} from '@angular/common';
import amethystTier from '../generated/cms/sponsor-tier/amethyst';
import rubyTier from '../generated/cms/sponsor-tier/ruby';
import {SponsorTierPresentationComponent} from '../sponsor-tier-presentation/sponsor-tier-presentation.component';
import diamondTier from '../generated/cms/sponsor-tier/diamond';

@Component({
  selector: 'app-sponsorship-page',
  standalone: true,
  imports: [
    RouterLink,
    SponsorTierSnippetComponent,
    DecimalPipe,
    SponsorTierPresentationComponent
  ],
  templateUrl: './sponsorship-page.component.html',
  styleUrl: './sponsorship-page.component.css'
})
export class SponsorshipPageComponent {
  public readonly quartzTier = quartz_default;
  public readonly amethystTier = amethyst_default;
  public readonly rubyTier = ruby_default;
  public readonly diamondTier = diamond_default;
  public readonly obsidianTier = obsidian_default;
}
