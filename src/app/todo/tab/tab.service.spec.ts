import { TestBed, inject } from '@angular/core/testing';

import { TodoTabService } from './tab.service';

describe('TodoTabService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoTabService]
    });
  });

  it('should be created', inject([TodoTabService], (service: TodoTabService) => {
    expect(service).toBeTruthy();
  }));
});
