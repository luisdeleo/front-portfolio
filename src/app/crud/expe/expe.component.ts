import { Component, OnInit } from '@angular/core';
import { Expe } from './../../model/expe';
import { PorfolioService } from './../../services/porfolio.service';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-expe',
  templateUrl: './expe.component.html',
  styleUrls: ['./expe.component.css']
})
export class ExpeComponent implements OnInit {

  exper:Expe[];
  expe:Expe= new Expe();

  constructor(private service:PorfolioService, private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.service.getExpe()
    .subscribe(data=>{
      this.exper=data;
    })
  }

  Guardar(exper:Expe){
    this.service.createExpe(exper)
    .subscribe(data=>{
      alert("Se Agrego con exito la entrada N° " + exper.id);
      this.router.navigate(["/Crud"]);
    })
  }

  Editar(exper:Expe){
    localStorage.setItem("id", exper.id.toString());
    this.router.navigate(["/Editexpe"]);
  }

  Delete(exper:Expe){
    this.service.deleteExpe(exper)
    .subscribe(data=>{
      this.exper=this.exper.filter(e=>e!==exper);
      alert("Se Elimino el Elemento" );
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
