import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import {  MatDialogModule,
          MatButtonModule,
          MatInputModule } from '@angular/material';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MarkersService } from './services/markers.service';
import { MarkerDetailsComponent } from './dialogs/marker-details/marker-details.component';


@NgModule({
  declarations: [
    AppComponent,
    MarkerDetailsComponent
  ],
  imports: [
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    BrowserModule,
		AgmCoreModule.forRoot({
		  apiKey: 'AIzaSyDT2NO8RgOBPpi3Hph-sjfyE1zyRPAoMnQ'
		})    
  ],
  providers: [MarkersService],
  entryComponents: [
    MarkerDetailsComponent
  ],   
  bootstrap: [AppComponent]
})
export class AppModule { }
