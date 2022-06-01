import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  timer;
  counter = 0;
  @Output() oddGenEvent = new EventEmitter<{num: number}>();
  @Output() evenGenEvent = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  nextNum(){
    this.counter += 1;
    console.log(this.counter);

    if(this.counter % 2 == 0) {
      console.log('emit even event...');
      this.evenGenEvent.emit(this.counter);
    } 
    else {
      console.log('emit odd event...');
      this.oddGenEvent.emit({num: this.counter});
    }
  }

  onStartClicked(){
    console.log('Starting Timer');
    this.nextNum();
    this.timer = setInterval(() => { this.nextNum() }, 750);
  }

  onStopClicked(){
    console.log('Stopping Timer');
    clearInterval(this.timer);
    
  }
}
