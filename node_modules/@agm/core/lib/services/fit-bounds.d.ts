/// <reference types="googlemaps" />
import { BehaviorSubject, Observable } from 'rxjs';
import { MapsAPILoader } from './maps-api-loader/maps-api-loader';
import * as ɵngcc0 from '@angular/core';
export interface FitBoundsDetails {
    latLng: google.maps.LatLng | google.maps.LatLngLiteral;
}
/**
 * @internal
 */
export declare type BoundsMap = Map<string, google.maps.LatLng | google.maps.LatLngLiteral>;
/**
 * Class to implement when you what to be able to make it work with the auto fit bounds feature
 * of AGM.
 */
export declare abstract class FitBoundsAccessor {
    abstract getFitBoundsDetails$(): Observable<FitBoundsDetails>;
}
/**
 * The FitBoundsService is responsible for computing the bounds of the a single map.
 */
export declare class FitBoundsService {
    protected readonly bounds$: Observable<google.maps.LatLngBounds>;
    protected readonly _boundsChangeSampleTime$: BehaviorSubject<number>;
    protected readonly _includeInBounds$: BehaviorSubject<BoundsMap>;
    constructor(loader: MapsAPILoader);
    private _generateBounds;
    addToBounds(latLng: google.maps.LatLng | google.maps.LatLngLiteral): void;
    removeFromBounds(latLng: google.maps.LatLng | google.maps.LatLngLiteral): void;
    changeFitBoundsChangeSampleTime(timeMs: number): void;
    getBounds$(): Observable<google.maps.LatLngBounds>;
    protected _createIdentifier(latLng: google.maps.LatLng | google.maps.LatLngLiteral): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FitBoundsService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<FitBoundsService>;
}

//# sourceMappingURL=fit-bounds.d.ts.map