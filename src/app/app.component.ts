import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { MarkerDetailsComponent } from './dialogs/marker-details/marker-details.component';
import { MarkersService } from './services/markers.service';
import { Marker } from './types/marker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private latMap: number = 51.678418;
  private lngMap: number = 7.809007;
  private markers: Marker[] = [];

  constructor(private markersService: MarkersService, 
  						private matDialog: MatDialog) { };

  ngOnInit() {
    console.log('renderMarkers');
  	this.renderMarkers();
  };

  private renderMarkers() {
  		let markers = this.markersService.getMarkers();

  		markers.forEach((marker) => {
  			this.markers.push({
  				id: marker.id,
  				lat: marker.lat,
  				lng: marker.lng,
          balloonText: marker.balloonText,
          hintText: marker.hintText
  			});
  		});
  };

  private onRightClick(marker, ev) {
  	console.log(marker, ev);
  };

  private openUpdModal(marker) {
  	console.log(marker);

		this.matDialog.open(MarkerDetailsComponent, {
		  width: '300px',
		  hasBackdrop: true,
		  data: {marker: marker}
		});  	
  };

  private mapClick(ev) {  	
    let newMarker: Marker = {
      id: 'id_' + Date.now() + '_' + performance.now(),
      lat: ev.coords.lat,
      lng: ev.coords.lng,
      balloonText: '',
      hintText: ''      
    };
  	this.markers.push(newMarker);
    this.markersService.addMarker(newMarker);
  };
}
