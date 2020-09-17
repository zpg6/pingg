import { AgmBicyclingLayer } from '../../directives/bicycling-layer';
import { AgmTransitLayer } from '../../directives/transit-layer';
import { GoogleMapsAPIWrapper } from '../google-maps-api-wrapper';
/**
 * This class manages Transit and Bicycling Layers for a Google Map instance.
 */
export declare class LayerManager {
    private _wrapper;
    private _layers;
    constructor(_wrapper: GoogleMapsAPIWrapper);
    /**
     * Adds a transit layer to a map instance.
     * @param layer - a TransitLayer object
     * @param _options - TransitLayerOptions options
     * @returns void
     */
    addTransitLayer(layer: AgmTransitLayer): void;
    /**
     * Adds a bicycling layer to a map instance.
     * @param layer - a bicycling layer object
     * @param _options - BicyclingLayer options
     * @returns void
     */
    addBicyclingLayer(layer: AgmBicyclingLayer): void;
    /**
     * Deletes a map layer
     * @param layer - the layer to delete
     */
    deleteLayer(layer: AgmTransitLayer | AgmBicyclingLayer): Promise<void>;
}
