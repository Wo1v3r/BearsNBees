//Angular CLI Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Angular Flex Layout Modules
import { FlexLayoutModule } from '@angular/flex-layout';

//Angular Material Custom Module
import { BearMatModule } from './bear-mat.module';

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    BearMatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
