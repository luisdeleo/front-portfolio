import { Expe } from './../../model/expe';
import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/services/porfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
miPorfolio: any;
expe:Expe[];

  constructor(private service: PorfolioService) { }

  ngOnInit(): void {
    this.service.obtenerDatos().subscribe(data => {
      if (data) {
        this.miPorfolio = data;
      }
    });

    this.service.getExpe()
    .subscribe(data=>{
      this.expe=data;
    })
  }
}
