import { TestBed } from '@angular/core/testing';

import { LcuStateStateManagerContext } from './lcu-state-state-manager.context';

describe('LcuStateStateManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LcuStateStateManagerContext = TestBed.get(LcuStateStateManagerContext);
    expect(service).toBeTruthy();
  });
});
