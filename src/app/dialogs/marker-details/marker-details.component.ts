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
	private hintText: string = '';

  constructor(private matDialogRef: MatDialogRef<MarkerDetailsComponent>,
              private markersService: MarkersService,
  						@Inject(MAT_DIALOG_DATA) public data: any) 
  { 
    this.balloonText = this.data.marker.balloonText;  
  	this.hintText = this.data.marker.hintText;  
  }

  ngOnInit() {
  	
  }

  private updDetails(marker) {
    marker['balloonText'] = this.balloonText;
    marker['hintText'] = this.hintText;
    this.markersService.updMarker(marker);
    this.matDialogRef.close();
  };

}
