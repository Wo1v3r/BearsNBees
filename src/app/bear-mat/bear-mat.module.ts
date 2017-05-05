import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {
  MdToolbarModule,
  MdButtonModule,
  MdCardModule,
} from '@angular/material';


@NgModule({
  imports: [
    // CommonModule
    MdToolbarModule,
    MdButtonModule,
    MdCardModule,

  ],
  exports: [
    MdToolbarModule,
    MdButtonModule,
    MdCardModule,

  ]

})
export class BearMatModule { }
