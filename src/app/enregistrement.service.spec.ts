import { TestBed, inject } from '@angular/core/testing';

import { EnregistrementService } from './enregistrement.service';

describe('EnregistrementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnregistrementService]
    });
  });

  it('should be created', inject([EnregistrementService], (service: EnregistrementService) => {
    expect(service).toBeTruthy();
  }));
});
