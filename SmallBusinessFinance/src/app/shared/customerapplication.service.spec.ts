import { TestBed } from '@angular/core/testing';

import { CustomerapplicationService } from './customerapplication.service';

describe('CustomerapplicationService', () => {
  let service: CustomerapplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerapplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
