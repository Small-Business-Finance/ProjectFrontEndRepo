import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThprofileComponent } from './thprofile.component';

describe('ThprofileComponent', () => {
  let component: ThprofileComponent;
  let fixture: ComponentFixture<ThprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
