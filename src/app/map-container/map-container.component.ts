import { Component, OnInit } from '@angular/core';
import { } from '@angular/google-maps';

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.css']
})
export class MapContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // google maps zoom level
  zoom: number = 17;

  // initial center position for the map
  lat: number = 40.444265;
  lng: number = -79.953390;

  center = new google.maps.LatLng(40.444265,-79.953390);
}
