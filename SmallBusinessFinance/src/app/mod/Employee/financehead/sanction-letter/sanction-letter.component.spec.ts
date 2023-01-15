import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanctionLetterComponent } from './sanction-letter.component';

describe('SanctionLetterComponent', () => {
  let component: SanctionLetterComponent;
  let fixture: ComponentFixture<SanctionLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanctionLetterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanctionLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
