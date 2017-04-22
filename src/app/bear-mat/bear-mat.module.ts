import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { MdToolbarModule, MdButtonModule } from '@angular/material';

@NgModule({
  imports: [
    // CommonModule
    MdToolbarModule,
    MdButtonModule
  ],
  exports: [
    MdToolbarModule,
    MdButtonModule
  ]
  
})
export class BearMatModule { }
