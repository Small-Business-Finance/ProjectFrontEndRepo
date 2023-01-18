import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLeaveDetailsComponent } from './view-leave-details.component';

describe('ViewLeaveDetailsComponent', () => {
  let component: ViewLeaveDetailsComponent;
  let fixture: ComponentFixture<ViewLeaveDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLeaveDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLeaveDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
