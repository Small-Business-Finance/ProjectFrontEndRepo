import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaPersonalComponent } from './ca-personal.component';

describe('CaPersonalComponent', () => {
  let component: CaPersonalComponent;
  let fixture: ComponentFixture<CaPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaPersonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
