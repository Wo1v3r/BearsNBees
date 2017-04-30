import { TestBed, async } from '@angular/core/testing';

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
import { HoneypotDetailComponent } from './shared/honeypot-detail/honeypot-detail.component';
//Modules
import { BearMatModule } from './bear-mat/bear-mat.module';
import { AppRoutingModule } from './app-routing.module';

import {APP_BASE_HREF} from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
    NotfoundComponent,
    HoneypotDetailComponent
  ],
  imports: [
    AppRoutingModule,
    BearMatModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
