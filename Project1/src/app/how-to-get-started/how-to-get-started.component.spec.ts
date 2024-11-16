import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToGetStartedComponent } from './how-to-get-started.component';

describe('HowToGetStartedComponent', () => {
  let component: HowToGetStartedComponent;
  let fixture: ComponentFixture<HowToGetStartedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToGetStartedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToGetStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
