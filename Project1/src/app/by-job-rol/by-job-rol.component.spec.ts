import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BYJOBROLComponent } from './by-job-rol.component';

describe('BYJOBROLComponent', () => {
  let component: BYJOBROLComponent;
  let fixture: ComponentFixture<BYJOBROLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BYJOBROLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BYJOBROLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
