import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter = 0;

  constructor() { }

  ngOnInit() {
  }


  increment (){
    //this.counter = this.counter++;
    this.counter++;
    console.log(`Count is now ${this.counter}`);

  }

}
