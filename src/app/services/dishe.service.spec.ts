import { TestBed } from '@angular/core/testing';

import { DisheService } from './dishe.service';

describe('DisheService', () => {
  let service: DisheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
