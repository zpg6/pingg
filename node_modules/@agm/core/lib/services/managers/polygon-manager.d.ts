/// <reference types="googlemaps" />
import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { AgmPolygon } from '../../directives/polygon';
import { MVCEvent } from '../../utils/mvcarray-utils';
import { GoogleMapsAPIWrapper } from '../google-maps-api-wrapper';
import * as ɵngcc0 from '@angular/core';
export declare class PolygonManager {
    private _mapsWrapper;
    private _zone;
    private _polygons;
    constructor(_mapsWrapper: GoogleMapsAPIWrapper, _zone: NgZone);
    addPolygon(path: AgmPolygon): void;
    updatePolygon(polygon: AgmPolygon): Promise<void>;
    setPolygonOptions(path: AgmPolygon, options: {
        [propName: string]: any;
    }): Promise<void>;
    deletePolygon(paths: AgmPolygon): Promise<void>;
    getPath(polygonDirective: AgmPolygon): Promise<google.maps.LatLng[]>;
    getPaths(polygonDirective: AgmPolygon): Promise<google.maps.LatLng[][]>;
    createEventObservable<T>(eventName: string, path: AgmPolygon): Observable<T>;
    createPathEventObservable(agmPolygon: AgmPolygon): Promise<Observable<MVCEvent<google.maps.LatLng[] | google.maps.LatLngLiteral[]>>>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PolygonManager, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<PolygonManager>;
}

//# sourceMappingURL=polygon-manager.d.ts.map