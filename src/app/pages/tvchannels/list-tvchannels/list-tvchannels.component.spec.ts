import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTvchannelsComponent } from './list-tvchannels.component';

describe('ListTvchannelsComponent', () => {
  let component: ListTvchannelsComponent;
  let fixture: ComponentFixture<ListTvchannelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTvchannelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTvchannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
