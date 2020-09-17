import { Injectable } from '@angular/core';
import { GoogleMapsAPIWrapper } from '../google-maps-api-wrapper';
/**
 * This class manages Transit and Bicycling Layers for a Google Map instance.
 */
export class LayerManager {
    constructor(_wrapper) {
        this._wrapper = _wrapper;
        this._layers = new Map();
    }
    /**
     * Adds a transit layer to a map instance.
     * @param layer - a TransitLayer object
     * @param _options - TransitLayerOptions options
     * @returns void
     */
    addTransitLayer(layer) {
        const newLayer = this._wrapper.createTransitLayer();
        this._layers.set(layer, newLayer);
    }
    /**
     * Adds a bicycling layer to a map instance.
     * @param layer - a bicycling layer object
     * @param _options - BicyclingLayer options
     * @returns void
     */
    addBicyclingLayer(layer) {
        const newLayer = this._wrapper.createBicyclingLayer();
        this._layers.set(layer, newLayer);
    }
    /**
     * Deletes a map layer
     * @param layer - the layer to delete
     */
    deleteLayer(layer) {
        return this._layers.get(layer).then(currentLayer => {
            currentLayer.setMap(null);
            this._layers.delete(layer);
        });
    }
}
LayerManager.decorators = [
    { type: Injectable }
];
LayerManager.ctorParameters = () => [
    { type: GoogleMapsAPIWrapper }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXItbWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi9zZXJ2aWNlcy9tYW5hZ2Vycy9sYXllci1tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFbEU7O0dBRUc7QUFHSCxNQUFNLE9BQU8sWUFBWTtJQUlyQixZQUFvQixRQUE4QjtRQUE5QixhQUFRLEdBQVIsUUFBUSxDQUFzQjtRQUgxQyxZQUFPLEdBQ1gsSUFBSSxHQUFHLEVBQXVHLENBQUM7SUFFOUQsQ0FBQztJQUV0RDs7Ozs7T0FLRztJQUNILGVBQWUsQ0FBQyxLQUFzQjtRQUNsQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILGlCQUFpQixDQUFDLEtBQXdCO1FBQ3RDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUN0RCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVEOzs7T0FHRztJQUNILFdBQVcsQ0FBQyxLQUEwQztRQUNsRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUMvQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7O1lBdENKLFVBQVU7OztZQU5GLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFnbUJpY3ljbGluZ0xheWVyIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9iaWN5Y2xpbmctbGF5ZXInO1xuaW1wb3J0IHsgQWdtVHJhbnNpdExheWVyIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy90cmFuc2l0LWxheWVyJztcbmltcG9ydCB7IEdvb2dsZU1hcHNBUElXcmFwcGVyIH0gZnJvbSAnLi4vZ29vZ2xlLW1hcHMtYXBpLXdyYXBwZXInO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgbWFuYWdlcyBUcmFuc2l0IGFuZCBCaWN5Y2xpbmcgTGF5ZXJzIGZvciBhIEdvb2dsZSBNYXAgaW5zdGFuY2UuXG4gKi9cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExheWVyTWFuYWdlciB7XG4gICAgcHJpdmF0ZSBfbGF5ZXJzOiBNYXA8QWdtVHJhbnNpdExheWVyIHwgQWdtQmljeWNsaW5nTGF5ZXIsIFByb21pc2U8Z29vZ2xlLm1hcHMuVHJhbnNpdExheWVyIHwgZ29vZ2xlLm1hcHMuQmljeWNsaW5nTGF5ZXI+PiA9XG4gICAgICAgIG5ldyBNYXA8QWdtVHJhbnNpdExheWVyIHwgQWdtQmljeWNsaW5nTGF5ZXIsIFByb21pc2U8Z29vZ2xlLm1hcHMuVHJhbnNpdExheWVyIHwgZ29vZ2xlLm1hcHMuQmljeWNsaW5nTGF5ZXI+PigpO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfd3JhcHBlcjogR29vZ2xlTWFwc0FQSVdyYXBwZXIpIHt9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgdHJhbnNpdCBsYXllciB0byBhIG1hcCBpbnN0YW5jZS5cbiAgICAgKiBAcGFyYW0gbGF5ZXIgLSBhIFRyYW5zaXRMYXllciBvYmplY3RcbiAgICAgKiBAcGFyYW0gX29wdGlvbnMgLSBUcmFuc2l0TGF5ZXJPcHRpb25zIG9wdGlvbnNcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgYWRkVHJhbnNpdExheWVyKGxheWVyOiBBZ21UcmFuc2l0TGF5ZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbmV3TGF5ZXIgPSB0aGlzLl93cmFwcGVyLmNyZWF0ZVRyYW5zaXRMYXllcigpO1xuICAgICAgICB0aGlzLl9sYXllcnMuc2V0KGxheWVyLCBuZXdMYXllcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIGJpY3ljbGluZyBsYXllciB0byBhIG1hcCBpbnN0YW5jZS5cbiAgICAgKiBAcGFyYW0gbGF5ZXIgLSBhIGJpY3ljbGluZyBsYXllciBvYmplY3RcbiAgICAgKiBAcGFyYW0gX29wdGlvbnMgLSBCaWN5Y2xpbmdMYXllciBvcHRpb25zXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIGFkZEJpY3ljbGluZ0xheWVyKGxheWVyOiBBZ21CaWN5Y2xpbmdMYXllcik6IHZvaWQge1xuICAgICAgICBjb25zdCBuZXdMYXllciA9IHRoaXMuX3dyYXBwZXIuY3JlYXRlQmljeWNsaW5nTGF5ZXIoKTtcbiAgICAgICAgdGhpcy5fbGF5ZXJzLnNldChsYXllciwgbmV3TGF5ZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZXMgYSBtYXAgbGF5ZXJcbiAgICAgKiBAcGFyYW0gbGF5ZXIgLSB0aGUgbGF5ZXIgdG8gZGVsZXRlXG4gICAgICovXG4gICAgZGVsZXRlTGF5ZXIobGF5ZXI6IEFnbVRyYW5zaXRMYXllciB8IEFnbUJpY3ljbGluZ0xheWVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sYXllcnMuZ2V0KGxheWVyKS50aGVuKGN1cnJlbnRMYXllciA9PiB7XG4gICAgICAgICAgICBjdXJyZW50TGF5ZXIuc2V0TWFwKG51bGwpO1xuICAgICAgICAgICAgdGhpcy5fbGF5ZXJzLmRlbGV0ZShsYXllcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==