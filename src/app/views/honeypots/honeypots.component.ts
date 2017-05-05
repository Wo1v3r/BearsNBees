import { Component, OnInit } from '@angular/core';
import { HoneypotDetailComponent } from '../../shared/honeypot-detail/honeypot-detail.component';

@Component({
  selector: 'app-honeypots',
  templateUrl: './honeypots.component.html',
  styleUrls: ['./honeypots.component.css']
})
export class HoneypotsComponent implements OnInit {

  numbers: number[];
  constructor() { 
  ///Temporary:

        this.numbers = Array(9).map((x, i) => i); 

  }

  ngOnInit() {

  }



}
