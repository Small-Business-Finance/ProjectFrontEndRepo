import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCustomerFullDetailsComponent } from './view-customer-full-details.component';

describe('ViewCustomerFullDetailsComponent', () => {
  let component: ViewCustomerFullDetailsComponent;
  let fixture: ComponentFixture<ViewCustomerFullDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCustomerFullDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCustomerFullDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
