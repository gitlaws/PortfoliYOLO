import { TestBed } from '@angular/core/testing';

import { StarfieldService } from './starfield.service';

describe('StarfieldService', () => {
  let service: StarfieldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarfieldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
