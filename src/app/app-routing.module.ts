import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//All Views
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { HoneypotsComponent } from './views/honeypots/honeypots.component';
import { BearsComponent } from './views/bears/bears.component';
import { BearComponent } from './views/bear/bear.component';
import { BeesComponent } from './views/bees/bees.component';
import { NotfoundComponent } from './views/notfound/notfound.component';

//Routes:

const appRoutes: Routes = [
  //General Views
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'honeypots', component: HoneypotsComponent },
  { path: 'bears', component: BearsComponent },
  { path: 'bees', component: BeesComponent },
  { path: '404', component: NotfoundComponent},

  //Specific Views
  { path: 'bear', component: BearComponent},

  //Need to change url on address bar accordingly
  {path: 'home', redirectTo: '/', pathMatch:"full"},//TODO Fix this
  {path: '**', redirectTo: '/404', pathMatch:"full"} //TODO Fix this
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
