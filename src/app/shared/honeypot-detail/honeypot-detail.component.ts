import { Component, OnInit } from '@angular/core';
import { Tech } from '../data/tech';

import { TECHS } from '../data/tech-mock';

@Component({
  selector: 'app-honeypot-detail',
  templateUrl: './honeypot-detail.component.html',
  styleUrls: ['./honeypot-detail.component.css']
})
export class HoneypotDetailComponent implements OnInit {
  name: string = "HoneyPot Name";
  type: string = "HoneyPot Type";
  description: string = `Hell of salvia tousled hashtag ugh locavore synth, 
    shoreditch leggings glossier humblebrag retro brunch meh listicle.`;
  techs: Tech[] = TECHS;

  
  constructor() { }

  ngOnInit() {
  }

}
