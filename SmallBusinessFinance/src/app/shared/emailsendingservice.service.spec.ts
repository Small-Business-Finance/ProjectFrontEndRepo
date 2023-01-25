import { TestBed } from '@angular/core/testing';

import { EmailsendingService } from './emailsending.service';

describe('EmailsendingserviceService', () => {
  let service: EmailsendingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailsendingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
