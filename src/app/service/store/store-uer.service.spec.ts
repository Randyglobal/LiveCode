import { TestBed } from '@angular/core/testing';

import { StoreUerService } from './store-uer.service';

describe('StoreUerService', () => {
  let service: StoreUerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreUerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
