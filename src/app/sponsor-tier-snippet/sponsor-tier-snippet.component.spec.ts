import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorTierSnippetComponent } from './sponsor-tier-snippet.component';

describe('SponsorTierCardComponent', () => {
  let component: SponsorTierSnippetComponent;
  let fixture: ComponentFixture<SponsorTierSnippetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SponsorTierSnippetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SponsorTierSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
