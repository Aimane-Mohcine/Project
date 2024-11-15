import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SUPPLIERQUALITYENGINEERComponent } from './supplier-quality-engineer.component';

describe('SUPPLIERQUALITYENGINEERComponent', () => {
  let component: SUPPLIERQUALITYENGINEERComponent;
  let fixture: ComponentFixture<SUPPLIERQUALITYENGINEERComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SUPPLIERQUALITYENGINEERComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SUPPLIERQUALITYENGINEERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
