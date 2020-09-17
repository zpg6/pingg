/// <reference types="googlemaps" />
import { Observable } from 'rxjs';
import { MapsAPILoader } from './maps-api-loader/maps-api-loader';
import * as ɵngcc0 from '@angular/core';
export declare class AgmGeocoder {
    protected readonly geocoder$: Observable<google.maps.Geocoder>;
    constructor(loader: MapsAPILoader);
    geocode(request: google.maps.GeocoderRequest): Observable<google.maps.GeocoderResult[]>;
    private _getGoogleResults;
    private _createGeocoder;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AgmGeocoder, never>;
}

//# sourceMappingURL=geocoder-service.d.ts.map