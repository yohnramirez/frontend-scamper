import { TestBed } from '@angular/core/testing';

import { ServiciofrontService } from './serviciofront.service';

describe('ServiciofrontService', () => {
  let service: ServiciofrontService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciofrontService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
