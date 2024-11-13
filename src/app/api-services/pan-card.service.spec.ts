import { TestBed } from '@angular/core/testing';

import { PanCardService } from './pan-card.service';

describe('PanCardService', () => {
  let service: PanCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
