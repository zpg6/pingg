/// <reference types="googlemaps" />
import { Observable } from 'rxjs';
import { MapsAPILoader } from './maps-api-loader/maps-api-loader';
export declare class AgmGeocoder {
    protected readonly geocoder$: Observable<google.maps.Geocoder>;
    constructor(loader: MapsAPILoader);
    geocode(request: google.maps.GeocoderRequest): Observable<google.maps.GeocoderResult[]>;
    private _getGoogleResults;
    private _createGeocoder;
}
