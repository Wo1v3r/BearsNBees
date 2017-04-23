import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //Temp image
  logoUrl: string = "https://dummyimage.com/25x25/303030/fff.png&text=@";
  loggedIn : boolean = false;
  constructor() { }

  ngOnInit() {
  }

  login():void{
    this.loggedIn= true;
  }
  
  logout():void{
    this.loggedIn= false;
  }
}
