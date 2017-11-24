import { Injectable } from '@angular/core';


@Injectable()
export class MarkersService {

  constructor() { }

  getMarkers() {
  	return localStorage.markers ? JSON.parse(localStorage.markers) : [];
  };

  addMarker(markerObj) {	
  	let markers = this.getMarkers();
  	let id = 'id_' + Date.now() + '_' + performance.now();

	  markers.push({
	  	id: id,
	    lat: markerObj.coords.lat, 
	    lng: markerObj.coords.lng,
      balloonText: ''
	  });

	  localStorage.markers = JSON.stringify(markers);
  };

  updMarker(markerObj) {	
  	let markers = this.getMarkers();

  	markers.forEach((marker) => {
  		if(marker.id == markerObj.id) {
        console.log('marker', marker);
        marker['balloonText'] = markerObj.balloonText;
        console.log('newMarker', marker);
  		}
  	});

    console.log(markers);

	  localStorage.markers = JSON.stringify(markers);
  };    

}
