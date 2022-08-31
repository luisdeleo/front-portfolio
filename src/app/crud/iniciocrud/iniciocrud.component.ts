import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iniciocrud',
  templateUrl: './iniciocrud.component.html',
  styleUrls: ['./iniciocrud.component.css']
})
export class IniciocrudComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  atras(){
    this.router.navigate(["/Inicio/Presentacion"]);
  }

  onClick(){
    this.auth.logout()
    .then(()=>{
      this.router.navigate(["/Inicio/Presentacion"])
    })
    .catch(error => console.log(error));
  }

  logout(){
    this.auth.logout()
    .then(()=>{
      this.router.navigate(["/Inicio/Presentacion"])
    })
    .catch(error => console.log(error));
  }

}
