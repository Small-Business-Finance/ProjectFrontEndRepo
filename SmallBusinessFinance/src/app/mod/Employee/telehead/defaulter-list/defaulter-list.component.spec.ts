import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaulterListComponent } from './defaulter-list.component';

describe('DefaulterListComponent', () => {
  let component: DefaulterListComponent;
  let fixture: ComponentFixture<DefaulterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaulterListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaulterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
