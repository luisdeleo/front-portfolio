import { Auth } from '@angular/fire/auth';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PorfolioService } from './porfolio.service';

describe('PorfolioService', () => {
  let service: PorfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
          imports: [ HttpClientTestingModule ],
          providers: [ {provide: Auth, useValue: {}} ]
    });
    service = TestBed.inject(PorfolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

