import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LOGISTICSComponent } from './logistics.component';

describe('LOGISTICSComponent', () => {
  let component: LOGISTICSComponent;
  let fixture: ComponentFixture<LOGISTICSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LOGISTICSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LOGISTICSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
