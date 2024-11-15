import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KOLAYAMFORSALESComponent } from './kolayam-for-sales.component';

describe('KOLAYAMFORSALESComponent', () => {
  let component: KOLAYAMFORSALESComponent;
  let fixture: ComponentFixture<KOLAYAMFORSALESComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KOLAYAMFORSALESComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KOLAYAMFORSALESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
