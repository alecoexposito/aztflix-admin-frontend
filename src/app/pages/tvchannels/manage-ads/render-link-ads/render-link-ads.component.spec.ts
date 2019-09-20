import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderLinkAdsComponent } from './render-link-ads.component';

describe('RenderLinkAdsComponent', () => {
  let component: RenderLinkAdsComponent;
  let fixture: ComponentFixture<RenderLinkAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderLinkAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderLinkAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
