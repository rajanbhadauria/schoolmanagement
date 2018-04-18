import { TestBed, inject } from '@angular/core/testing';

import { ManageSessionService } from './manage-session.service';

describe('ManageSessionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManageSessionService]
    });
  });

  it('should be created', inject([ManageSessionService], (service: ManageSessionService) => {
    expect(service).toBeTruthy();
  }));
});
