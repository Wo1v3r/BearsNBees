//Angular CLI Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Angular Flex Layout Modules
import { FlexLayoutModule } from '@angular/flex-layout';

//Angular Material Custom Module
import { BearMatModule } from './bear-mat/bear-mat.module';

//Routing
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { HoneypotsComponent } from './views/honeypots/honeypots.component';
import { BearsComponent } from './views/bears/bears.component';
import { BeesComponent } from './views/bees/bees.component';
import { HoneypotComponent } from './views/honeypot/honeypot.component';
import { BearComponent } from './views/bear/bear.component';
import { NotfoundComponent } from './views/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    HoneypotsComponent,
    BearsComponent,
    BeesComponent,
    HoneypotComponent,
    BearComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FlexLayoutModule,
    BearMatModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue : '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
