import { Edu } from './../model/edu';
import { Expe } from './../model/expe';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { signOut, Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {


  constructor( private http:HttpClient, private auth:Auth) { }

 Urlexpe = 'https://api-portfolio-deleonibus.herokuapp.com/bq1w7g1ex7509pfg59vk/elemento';
 Urledu = 'https://api-portfolio-deleonibus.herokuapp.com/bq1w7g1ex7509pfg59vk/';

 //METODOS DE EXPERIENCIA

getExpe(){
  return this.http.get<Expe[]>(this.Urlexpe);
}

createExpe(exper:Expe){
  return this.http.post<Expe>(this.Urlexpe, exper);
}

getExpeId(id:number){
  return this.http.get<Expe>(this.Urlexpe + "/" + id);
}

updateExpe(exper:Expe){
  return this.http.put<Expe>(this.Urlexpe + "/" + exper.id, exper);
}

deleteExpe(exper:Expe){
  return this.http.delete<Expe>(this.Urlexpe + "/" + exper.id);
}

//METODOS DE EDUCACION

getEdu(){
  return this.http.get<Edu[]>(this.Urledu + "estudio");
}

createEdu(educ:Edu){
  return this.http.post<Edu>(this.Urledu  + "estudio", educ);
}

getEduId(id:number){
  return this.http.get<Edu>(this.Urledu + "estudio" + "/" + id);
}

updateEdu(educ:Edu){
  return this.http.put<Edu>(this.Urledu + "estudio" + "/" + educ.id, educ);
}

deleteEdu(educ:Edu){
  return this.http.delete<Edu>(this.Urledu + "estudio" + "/" + educ.id);
}

logout(){
  return signOut(this.auth);
}
//CONEXION A SERVICIO .JSON

obtenerDatos():Observable<any>{
    return this.http.get('./assets/data/data.json');
}

}
