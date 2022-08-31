import { ExpeComponent } from './crud/expe/expe.component';
import { EduComponent } from './crud/edu/edu.component';
import { EditeduComponent } from './crud/editedu/editedu.component';
import { IniciocrudComponent } from './crud/iniciocrud/iniciocrud.component';
import { EditExpeComponent } from './crud/edit-expe/edit-expe.component';
import { LoginComponent } from './components/login/login.component';
import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  { path: '', redirectTo: 'Inicio/Presentacion', pathMatch: 'full' },
  { path: 'Inicio', component: HeaderComponent, children:[
  { path: 'Presentacion', component: PresentationComponent },
  { path: 'Experiencia', component: ExperienceComponent},
  { path: 'Trabajos', component: JobsComponent },
  { path: 'Educacion', component: EducationComponent },
  { path: 'Contacto', component: ContactComponent }]},

  { path: 'Login', component: LoginComponent},
  { path: 'Crud', component: IniciocrudComponent,...canActivate(() => redirectUnauthorizedTo(['/Login']))}, 
  { path: 'Editexpe', component: EditExpeComponent,...canActivate(() => redirectUnauthorizedTo(['/Login']))},
  { path: 'Editedu', component: EditeduComponent, ...canActivate(() => redirectUnauthorizedTo(['/Login']))},
  { path: 'Expe', component: ExpeComponent, ...canActivate(() => redirectUnauthorizedTo(['/Login']))},
  { path: 'Edu', component: EduComponent, ...canActivate(() => redirectUnauthorizedTo(['/Login']))},
  { path: '**', redirectTo: '/Inicio/Presentacion', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
