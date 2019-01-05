import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() dataParent ;
  @Output() childData = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  submit(data){
    this.childData.emit(data);
  }

}
