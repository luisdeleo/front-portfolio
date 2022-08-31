import { Component, OnInit } from '@angular/core';
import { Edu } from './../../model/edu';
import { PorfolioService } from './../../services/porfolio.service';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-edu',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.css']
})
export class EduComponent implements OnInit {
  educ:Edu[];
  edu:Edu = new Edu();
  
  constructor(private auth:AuthService, private router:Router, private service:PorfolioService) { }

  ngOnInit(): void {
    this.service.getEdu()
    .subscribe(data=>{
      this.educ=data;
    })
  }

  Guardar(educ:Edu){
    this.service.createEdu(educ)
    .subscribe(data=>{
      alert("Se Agrego con exito la entrada N° " + educ.id);
      this.router.navigate(["/Edu"]);
    })
  }

  Editar(educ:Edu){
    localStorage.setItem("id", educ.id.toString());
    this.router.navigate(["/Editedu"]);
  }

  Delete(educ:Edu){
    this.service.deleteEdu(educ)
    .subscribe(data=>{
      this.educ=this.educ.filter(e=>e!==educ);
      alert("Se Elimino el Elemento");
    })
  }

  atras(){
    this.router.navigate(["/Crud"]);
  }
  
  onClick(){
    this.auth.logout()
    .then(()=>{
      this.router.navigate(["/Inicio/Presentacion"])
    })
    .catch(error => console.log(error));
  }

  logout(){
    this.service.logout()
    .then(()=>{
      this.router.navigate(["/Inicio/Presentacion"])
    })
    .catch(error => console.log(error));
  }


}
