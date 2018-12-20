import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Web Development';
  textInput:string = "Marvellous Infosystems";

  fun(){
    return this.textInput;
  }

  gun(){
    this.textInput="Educating for Better tomorrow";
    return this.textInput;
  }

}
