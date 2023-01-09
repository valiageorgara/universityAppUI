import { TestBed } from '@angular/core/testing';

import { KeycloakInterceptor } from './keycloak.interceptor';

describe('KeycloakInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      KeycloakInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: KeycloakInterceptor = TestBed.inject(KeycloakInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
