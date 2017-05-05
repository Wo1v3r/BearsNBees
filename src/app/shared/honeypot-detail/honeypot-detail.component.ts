import { Component, OnInit } from '@angular/core';

import { HoneyPot } from '../data/honeypot';
import { HONEYPOT } from '../data/honeypot-mock';


@Component({
  selector: 'app-honeypot-detail',
  templateUrl: './honeypot-detail.component.html',
  styleUrls: ['./honeypot-detail.component.css']
})
export class HoneypotDetailComponent implements OnInit {

  honeypot: HoneyPot = HONEYPOT;
  
  constructor() { }

  ngOnInit() {
  }

}
