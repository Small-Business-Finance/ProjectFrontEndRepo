import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FhprofileComponent } from './fhprofile.component';

describe('FhprofileComponent', () => {
  let component: FhprofileComponent;
  let fixture: ComponentFixture<FhprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FhprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FhprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
