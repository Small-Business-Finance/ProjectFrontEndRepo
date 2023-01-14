import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaprofileComponent } from './caprofile.component';

describe('CaprofileComponent', () => {
  let component: CaprofileComponent;
  let fixture: ComponentFixture<CaprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
