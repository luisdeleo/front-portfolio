import { Expe } from './../../model/expe';
import { PorfolioService } from './../../services/porfolio.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-expe',
  templateUrl: './edit-expe.component.html',
  styleUrls: ['./edit-expe.component.css']
})
export class EditExpeComponent implements OnInit {

  exper: Expe = new Expe();

  constructor(private router:Router, private service:PorfolioService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getExpeId(+id)
    .subscribe(data=>{
      this.exper=data
    })
  }
  
  Actualizar(exper:Expe){
    this.service.updateExpe(exper)
    .subscribe(data=>{
      this.exper=data;
      alert("Se Modifico con Exito!")
      this.router.navigate(["/Expe"]);
    })
  }

  atras(){
    this.router.navigate(["/Expe"]);
  }

  logout(){
    this.service.logout()
    .then(()=>{
      this.router.navigate(["/Inicio/Presentacion"])
    })
    .catch(error => console.log(error));
  }

}
