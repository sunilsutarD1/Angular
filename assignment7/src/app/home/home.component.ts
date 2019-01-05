import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <section class="jumbotron text-center">
  <div class="container">
    <h1 class="jumbotron-heading">Routing example using Bootstrap</h1>
    <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
    <p>
      <a routerLink="/technologies" class="btn btn-primary my-2 w-25">Technologies</a>
      <a routerLink="/books" class="btn btn-secondary my-2 ml-2 w-25">Books</a>
    </p>
  </div>
</section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
