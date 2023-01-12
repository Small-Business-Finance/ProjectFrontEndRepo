import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCustomerApplicationComponent } from './register-customer-application.component';

describe('RegisterCustomerApplicationComponent', () => {
  let component: RegisterCustomerApplicationComponent;
  let fixture: ComponentFixture<RegisterCustomerApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCustomerApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterCustomerApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
