import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ng-model-demo',
  templateUrl: './ng-model-demo.component.html',
  styleUrls: ['./ng-model-demo.component.css']
})
export class NgModelDemoComponent implements OnInit {
  name='';
  sname='';
  constructor() { }

  ngOnInit() {
  }

  fun(data:any){
    this.sname=data.target.value;
  }
}
