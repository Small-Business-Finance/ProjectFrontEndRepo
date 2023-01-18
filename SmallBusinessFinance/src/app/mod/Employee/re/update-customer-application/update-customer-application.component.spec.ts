import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCustomerApplicationComponent } from './update-customer-application.component';

describe('UpdateCustomerApplicationComponent', () => {
  let component: UpdateCustomerApplicationComponent;
  let fixture: ComponentFixture<UpdateCustomerApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCustomerApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCustomerApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
