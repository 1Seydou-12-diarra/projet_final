import { TestBed } from '@angular/core/testing';

import { LoginAdService } from './login-ad.service';

describe('LoginAdService', () => {
  let service: LoginAdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginAdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
