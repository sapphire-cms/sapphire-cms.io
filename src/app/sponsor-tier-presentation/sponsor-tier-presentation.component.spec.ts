import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorTierPresentationComponent } from './sponsor-tier-presentation.component';

describe('SponsorTierPresentationComponent', () => {
  let component: SponsorTierPresentationComponent;
  let fixture: ComponentFixture<SponsorTierPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SponsorTierPresentationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SponsorTierPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
