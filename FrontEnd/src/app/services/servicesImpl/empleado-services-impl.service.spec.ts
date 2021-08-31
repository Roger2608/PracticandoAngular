import { TestBed } from '@angular/core/testing';

import { EmpleadoServiceImpl } from './empleado-service-impl.service';

describe('EmpleadoServicesImplService', () => {
  let service: EmpleadoServiceImpl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpleadoServiceImpl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
