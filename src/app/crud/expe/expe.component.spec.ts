import { Auth } from '@angular/fire/auth';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeComponent } from './expe.component';

describe('ExpeComponent', () => {
  let component: ExpeComponent;
  let fixture: ComponentFixture<ExpeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpeComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule ],
      providers: [ {provide: Auth, useValue: {}} ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
