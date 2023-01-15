import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterLeaveApplicationComponent } from './register-leave-application.component';

describe('RegisterLeaveApplicationComponent', () => {
  let component: RegisterLeaveApplicationComponent;
  let fixture: ComponentFixture<RegisterLeaveApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterLeaveApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterLeaveApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
