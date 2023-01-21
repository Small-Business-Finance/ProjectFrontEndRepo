import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewemitableComponent } from './viewemitable.component';

describe('ViewemitableComponent', () => {
  let component: ViewemitableComponent;
  let fixture: ComponentFixture<ViewemitableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewemitableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewemitableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
