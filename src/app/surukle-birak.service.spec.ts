import { TestBed } from '@angular/core/testing';

import { SurukleBirakService } from './surukle-birak.service';

describe('SurukleBirakService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [SurukleBirakService]
  }));

  it('should be created', () => {
    const service: SurukleBirakService = TestBed.get(SurukleBirakService);
    expect(service).toBeTruthy();
  });
});

