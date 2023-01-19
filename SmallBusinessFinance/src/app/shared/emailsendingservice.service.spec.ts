import { TestBed } from '@angular/core/testing';

import { EmailsendingserviceService } from './emailsending.service';

describe('EmailsendingserviceService', () => {
  let service: EmailsendingserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailsendingserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
