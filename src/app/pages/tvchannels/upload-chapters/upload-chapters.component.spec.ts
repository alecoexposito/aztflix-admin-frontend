import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadChaptersComponent } from './upload-chapters.component';

describe('UploadChaptersComponent', () => {
  let component: UploadChaptersComponent;
  let fixture: ComponentFixture<UploadChaptersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadChaptersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadChaptersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
