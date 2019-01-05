import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  template: `
  <h1>
    Technologies : 
    </h1>
    <div class="d-flex flex-column bd-highlight mb-3">
      <div class="p-2 bd-highlight" *ngFor="let item of booksList">{{item}}</div>
    </div>
  `,
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  booksList = ['ng-book-angular','C#-book','Android-book','Big Data-book','Data Science-book','Artificial Inteligence-book']
  constructor() { }

  ngOnInit() {
  }

}
