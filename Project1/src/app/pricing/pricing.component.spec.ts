import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PRICINGComponent } from './pricing.component';

describe('PRICINGComponent', () => {
  let component: PRICINGComponent;
  let fixture: ComponentFixture<PRICINGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PRICINGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PRICINGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
