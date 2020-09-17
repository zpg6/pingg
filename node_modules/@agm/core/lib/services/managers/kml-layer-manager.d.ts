/// <reference types="googlemaps" />
import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { AgmKmlLayer } from './../../directives/kml-layer';
import { GoogleMapsAPIWrapper } from './../google-maps-api-wrapper';
/**
 * Manages all KML Layers for a Google Map instance.
 */
import * as ɵngcc0 from '@angular/core';
export declare class KmlLayerManager {
    private _wrapper;
    private _zone;
    private _layers;
    constructor(_wrapper: GoogleMapsAPIWrapper, _zone: NgZone);
    /**
     * Adds a new KML Layer to the map.
     */
    addKmlLayer(layer: AgmKmlLayer): void;
    setOptions(layer: AgmKmlLayer, options: google.maps.KmlLayerOptions): void;
    deleteKmlLayer(layer: AgmKmlLayer): void;
    /**
     * Creates a Google Maps event listener for the given KmlLayer as an Observable
     */
    createEventObservable<T>(eventName: string, layer: AgmKmlLayer): Observable<T>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<KmlLayerManager, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<KmlLayerManager>;
}

//# sourceMappingURL=kml-layer-manager.d.ts.map