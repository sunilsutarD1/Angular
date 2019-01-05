import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  template: `
    <h1>
    Technologies : 
    </h1>
    <div class="d-flex flex-column bd-highlight mb-3">
      <div class="p-2 bd-highlight" *ngFor="let item of techList">{{item}}</div>
    </div>
  `,
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {
techList = ['Angular','Node Js','Android','Big Data','Data Science','Artificial Inteligence']
  constructor() { }

  ngOnInit() {
  }

}
