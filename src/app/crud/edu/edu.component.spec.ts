import { RouterTestingModule } from '@angular/router/testing';
import { Auth } from '@angular/fire/auth';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduComponent } from './edu.component';

describe('EduComponent', () => {
  let component: EduComponent;
  let fixture: ComponentFixture<EduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EduComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule ],
      providers: [ {provide: Auth, useValue: {}} ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
