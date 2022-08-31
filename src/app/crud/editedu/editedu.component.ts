import { PorfolioService } from './../../services/porfolio.service';
import { Router } from '@angular/router';
import { Edu } from './../../model/edu';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editedu',
  templateUrl: './editedu.component.html',
  styleUrls: ['./editedu.component.css']
})
export class EditeduComponent implements OnInit {

  educ: Edu = new Edu();

  constructor(private router:Router, private service:PorfolioService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getEduId(+id)
    .subscribe(data=>{
      this.educ=data
    })
  }
  
  Actualizar(educ:Edu){
    this.service.updateEdu(educ)
    .subscribe(data=>{
      this.educ=data;
      alert("Se Modifico con Exito!")
      this.router.navigate(["/Edu"]);
    })
  }

  atras(){
    this.router.navigate(["/Edu"]);
  }

  logout(){
    this.service.logout()
    .then(()=>{
      this.router.navigate(["/Inicio/Presentacion"])
    })
    .catch(error => console.log(error));
  }

}
