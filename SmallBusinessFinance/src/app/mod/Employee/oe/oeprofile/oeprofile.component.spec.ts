import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OeprofileComponent } from './oeprofile.component';

describe('OeprofileComponent', () => {
  let component: OeprofileComponent;
  let fixture: ComponentFixture<OeprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OeprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OeprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
