import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsSubComponent } from './obs-sub.component';

describe('ObsSubComponent', () => {
  let component: ObsSubComponent;
  let fixture: ComponentFixture<ObsSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObsSubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
