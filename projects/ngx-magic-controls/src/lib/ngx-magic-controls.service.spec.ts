import { TestBed } from '@angular/core/testing';

import { NgxMagicControlsService } from './ngx-magic-controls.service';

describe('NgxMagicControlsService', () => {
  let service: NgxMagicControlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMagicControlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
