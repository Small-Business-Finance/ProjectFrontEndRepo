import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewemployeeleaveComponent } from './viewemployeeleave.component';

describe('ViewemployeeleaveComponent', () => {
  let component: ViewemployeeleaveComponent;
  let fixture: ComponentFixture<ViewemployeeleaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewemployeeleaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewemployeeleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
