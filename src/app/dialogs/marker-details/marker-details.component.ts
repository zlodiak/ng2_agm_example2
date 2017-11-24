import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { MarkersService } from '../../services/markers.service';


@Component({
  selector: 'app-marker-details',
  templateUrl: './marker-details.component.html',
  styleUrls: ['./marker-details.component.scss']
})
export class MarkerDetailsComponent implements OnInit {

	private balloonText: string = '';

  constructor(private matDialogRef: MatDialogRef<MarkerDetailsComponent>,
              private markersService: MarkersService,
  						@Inject(MAT_DIALOG_DATA) public data: any) 
  { 
  	this.balloonText = this.data.marker.balloonText;  
    console.log(this.data.marker);	
  }

  ngOnInit() {
  	
  }

  private updDetails(marker) {
    marker['balloonText'] = this.balloonText;
    this.markersService.updMarker(marker);
    this.matDialogRef.close();
  };

}
