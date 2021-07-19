import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  @Output() number = new EventEmitter<number>()

  constructor() { }

  ngOnInit() {}

  addNumber(num: number){
    this.number.emit(num);
  }


}
