import { TestBed, inject } from '@angular/core/testing';

import { FeestructureService } from './feestructure.service';

describe('FeestructureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeestructureService]
    });
  });

  it('should be created', inject([FeestructureService], (service: FeestructureService) => {
    expect(service).toBeTruthy();
  }));
});
