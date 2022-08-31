import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { AuthService } from './../../services/auth.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciocrudComponent } from './iniciocrud.component';

describe('IniciocrudComponent', () => {
  let component: IniciocrudComponent;
  let fixture: ComponentFixture<IniciocrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciocrudComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule ],
      providers: [ {provide: Auth, useValue: {}}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciocrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
