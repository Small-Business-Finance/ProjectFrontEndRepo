import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmprofileComponent } from './bmprofile.component';

describe('BmprofileComponent', () => {
  let component: BmprofileComponent;
  let fixture: ComponentFixture<BmprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
