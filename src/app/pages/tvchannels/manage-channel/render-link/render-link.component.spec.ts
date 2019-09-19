import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderLinkComponent } from './render-link.component';

describe('RenderLinkComponent', () => {
  let component: RenderLinkComponent;
  let fixture: ComponentFixture<RenderLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
