import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
		AgmCoreModule.forRoot({
		  apiKey: 'AIzaSyDT2NO8RgOBPpi3Hph-sjfyE1zyRPAoMnQ'
		})    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
