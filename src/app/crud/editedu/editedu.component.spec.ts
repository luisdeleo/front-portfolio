import { Auth } from '@angular/fire/auth';
import { PorfolioService } from './../../services/porfolio.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeduComponent } from './editedu.component';

describe('EditeduComponent', () => {
  let component: EditeduComponent;
  let fixture: ComponentFixture<EditeduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeduComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule ],
      providers: [PorfolioService, {provide: Auth, useValue: {}}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
