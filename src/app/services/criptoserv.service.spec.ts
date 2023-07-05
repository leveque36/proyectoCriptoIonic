import { TestBed } from '@angular/core/testing';

import { CriptoservService } from './criptoserv.service';

describe('CriptoservService', () => {
  let service: CriptoservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriptoservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
