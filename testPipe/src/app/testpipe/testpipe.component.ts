import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testpipe',
  templateUrl: './testpipe.component.html',
  styleUrls: ['./testpipe.component.css']
})
export class TestpipeComponent implements OnInit {

  saludo: string = 'hola';
  today = new Date();
  stuff: Array<Object> = [];
  pattern: string;

  constructor() { }

  ngOnInit() {
  }

  addItem(item) {
    this.stuff.push({name: item});
    //el name tiene que ser el mismo que el primer argumento --> name.
//     <li *ngFor="let thing of stuff | filter:'name':pattern; let i = index">

  }

}
