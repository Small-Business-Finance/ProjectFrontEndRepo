import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FhPersonalComponent } from './fh-personal.component';

describe('FhPersonalComponent', () => {
  let component: FhPersonalComponent;
  let fixture: ComponentFixture<FhPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FhPersonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FhPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
