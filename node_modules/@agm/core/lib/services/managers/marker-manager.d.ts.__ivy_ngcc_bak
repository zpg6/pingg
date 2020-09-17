/// <reference types="googlemaps" />
import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { AgmMarker } from './../../directives/marker';
import { GoogleMapsAPIWrapper } from './../google-maps-api-wrapper';
export declare class MarkerManager {
    protected _mapsWrapper: GoogleMapsAPIWrapper;
    protected _zone: NgZone;
    protected _markers: Map<AgmMarker, Promise<google.maps.Marker>>;
    constructor(_mapsWrapper: GoogleMapsAPIWrapper, _zone: NgZone);
    convertAnimation(uiAnim: keyof typeof google.maps.Animation | null): Promise<google.maps.Animation>;
    deleteMarker(markerDirective: AgmMarker): Promise<void>;
    updateMarkerPosition(marker: AgmMarker): Promise<void>;
    updateTitle(marker: AgmMarker): Promise<void>;
    updateLabel(marker: AgmMarker): Promise<void>;
    updateDraggable(marker: AgmMarker): Promise<void>;
    updateIcon(marker: AgmMarker): Promise<void>;
    updateOpacity(marker: AgmMarker): Promise<void>;
    updateVisible(marker: AgmMarker): Promise<void>;
    updateZIndex(marker: AgmMarker): Promise<void>;
    updateClickable(marker: AgmMarker): Promise<void>;
    updateAnimation(marker: AgmMarker): Promise<void>;
    addMarker(marker: AgmMarker): void;
    getNativeMarker(marker: AgmMarker): Promise<google.maps.Marker>;
    createEventObservable<T extends (google.maps.MouseEvent | void)>(eventName: google.maps.MarkerMouseEventNames | google.maps.MarkerChangeOptionEventNames, marker: AgmMarker): Observable<T>;
}
