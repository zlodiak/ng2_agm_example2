import { Injectable } from '@angular/core';


@Injectable()
export class MarkersService {

  constructor() { }

  getMarkers() {
  	return localStorage.markers ? JSON.parse(localStorage.markers) : [];
  };

  removeMarker(markerObj) {  
    let newMarkers = [];
    let markers = this.getMarkers();

    markers.forEach((marker, i) => {
      if(marker.id != markerObj.id) {
        newMarkers.push(marker);
      }
    });

    localStorage.markers = JSON.stringify(newMarkers);    
  };

  addMarker(newMarker) {	
  	let markers = this.getMarkers();  	
	  markers.push(newMarker);
	  localStorage.markers = JSON.stringify(markers);
  };

  updMarker(markerObj) {	
  	let markers = this.getMarkers();

  	markers.forEach((marker) => {
  		if(marker.id == markerObj.id) {
        marker['balloonText'] = markerObj.balloonText;
        marker['hintText'] = markerObj.hintText;
  		}
  	});

	  localStorage.markers = JSON.stringify(markers);
  };    

}
