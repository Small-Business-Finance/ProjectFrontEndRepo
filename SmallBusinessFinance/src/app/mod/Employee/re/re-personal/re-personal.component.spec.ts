import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RePersonalComponent } from './re-personal.component';

describe('RePersonalComponent', () => {
  let component: RePersonalComponent;
  let fixture: ComponentFixture<RePersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RePersonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RePersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
