import { RouterTestingModule } from '@angular/router/testing';
import { Auth } from '@angular/fire/auth';
import { PorfolioService } from './../../services/porfolio.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExpeComponent } from './edit-expe.component';

describe('EditExpeComponent', () => {
  let component: EditExpeComponent;
  let fixture: ComponentFixture<EditExpeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditExpeComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule ],
      providers: [PorfolioService, {provide: Auth, useValue: {}}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditExpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
