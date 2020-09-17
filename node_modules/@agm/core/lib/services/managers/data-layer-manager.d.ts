/// <reference types="googlemaps" />
import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { AgmDataLayer } from './../../directives/data-layer';
import { GoogleMapsAPIWrapper } from './../google-maps-api-wrapper';
/**
 * Manages all Data Layers for a Google Map instance.
 */
import * as ɵngcc0 from '@angular/core';
export declare class DataLayerManager {
    private _wrapper;
    private _zone;
    private _layers;
    constructor(_wrapper: GoogleMapsAPIWrapper, _zone: NgZone);
    /**
     * Adds a new Data Layer to the map.
     */
    addDataLayer(layer: AgmDataLayer): void;
    deleteDataLayer(layer: AgmDataLayer): void;
    updateGeoJson(layer: AgmDataLayer, geoJson: object | string): void;
    setDataOptions(layer: AgmDataLayer, options: google.maps.Data.DataOptions): void;
    /**
     * Creates a Google Maps event listener for the given DataLayer as an Observable
     */
    createEventObservable<T>(eventName: string, layer: AgmDataLayer): Observable<T>;
    /**
     * Extract features from a geoJson using google.maps Data Class
     * @param d : google.maps.Data class instance
     * @param geoJson : url or geojson object
     */
    getDataFeatures(d: google.maps.Data, geoJson: object | string): Promise<google.maps.Data.Feature[]>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DataLayerManager, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<DataLayerManager>;
}

//# sourceMappingURL=data-layer-manager.d.ts.map