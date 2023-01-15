import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThPersonalComponent } from './th-personal.component';

describe('ThPersonalComponent', () => {
  let component: ThPersonalComponent;
  let fixture: ComponentFixture<ThPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThPersonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
