import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmPersonalComponent } from './bm-personal.component';

describe('BmPersonalComponent', () => {
  let component: BmPersonalComponent;
  let fixture: ComponentFixture<BmPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmPersonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
