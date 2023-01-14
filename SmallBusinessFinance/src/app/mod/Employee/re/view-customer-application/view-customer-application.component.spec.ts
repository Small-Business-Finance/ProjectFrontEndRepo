import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCustomerApplicationComponent } from './view-customer-application.component';

describe('ViewCustomerApplicationComponent', () => {
  let component: ViewCustomerApplicationComponent;
  let fixture: ComponentFixture<ViewCustomerApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCustomerApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCustomerApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
