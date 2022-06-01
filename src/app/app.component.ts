import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  
  evenElements = [];
  oddElements = [];

  onOddGenerated(n: {num: number}) {
    this.oddElements.push(n.num);
  }

  onEvenGenerated(num: number) {
    this.evenElements.push(num);
  }

}
