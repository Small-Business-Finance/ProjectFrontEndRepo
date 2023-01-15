import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OePersonalComponent } from './oe-personal.component';

describe('OePersonalComponent', () => {
  let component: OePersonalComponent;
  let fixture: ComponentFixture<OePersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OePersonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OePersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
