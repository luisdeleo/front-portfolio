import { Edu } from './../../model/edu';
import { PorfolioService } from 'src/app/services/porfolio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educ:Edu[];

  constructor(private service:PorfolioService) { }

  ngOnInit(): void {
    this.service.getEdu()
    .subscribe(data=>{
      this.educ=data;
    })
  }

}
