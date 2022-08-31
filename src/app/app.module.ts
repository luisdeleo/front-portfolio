import { AuthService } from './services/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { FooterComponent } from './components/footer/footer.component';
import { PorfolioService } from './services/porfolio.service';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { JobsComponent } from './components/jobs/jobs.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { LogoutComponent } from './components/logout/logout.component';
import { EditExpeComponent } from './crud/edit-expe/edit-expe.component';
import { IniciocrudComponent } from './crud/iniciocrud/iniciocrud.component';
import { EditeduComponent } from './crud/editedu/editedu.component';
import { ExpeComponent } from './crud/expe/expe.component';
import { EduComponent } from './crud/edu/edu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PresentationComponent,
    ExperienceComponent,
    ContactComponent,
    EducationComponent,
    FooterComponent,
    JobsComponent,
    LoginComponent,
    LogoutComponent,
    EditExpeComponent,
    IniciocrudComponent,
    EditeduComponent,
    ExpeComponent,
    EduComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [PorfolioService, AuthService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
