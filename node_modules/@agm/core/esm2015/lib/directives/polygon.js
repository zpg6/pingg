import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { PolygonManager } from '../services/managers/polygon-manager';
/**
 * AgmPolygon renders a polygon on a {@link AgmMap}
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polygon [paths]="paths">
 *      </agm-polygon>
 *    </agm-map>
 *  `
 * })
 * export class MyMapCmp {
 *   lat: number = 0;
 *   lng: number = 0;
 *   zoom: number = 10;
 *   paths: LatLngLiteral[] = [
 *     { lat: 0,  lng: 10 },
 *     { lat: 0,  lng: 20 },
 *     { lat: 10, lng: 20 },
 *     { lat: 10, lng: 10 },
 *     { lat: 0,  lng: 10 }
 *   ]
 *   // Nesting paths will create a hole where they overlap;
 *   nestedPaths: LatLngLiteral[][] = [[
 *     { lat: 0,  lng: 10 },
 *     { lat: 0,  lng: 20 },
 *     { lat: 10, lng: 20 },
 *     { lat: 10, lng: 10 },
 *     { lat: 0,  lng: 10 }
 *   ], [
 *     { lat: 0, lng: 15 },
 *     { lat: 0, lng: 20 },
 *     { lat: 5, lng: 20 },
 *     { lat: 5, lng: 15 },
 *     { lat: 0, lng: 15 }
 *   ]]
 * }
 * ```
 */
export class AgmPolygon {
    constructor(_polygonManager) {
        this._polygonManager = _polygonManager;
        /**
         * Indicates whether this Polygon handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this shape over the map. The geodesic
         * property defines the mode of dragging. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
         * If set to true, the user can edit this shape by dragging the control
         * points shown at the vertices and on each segment. Defaults to false.
         */
        this.editable = false;
        /**
         * When true, edges of the polygon are interpreted as geodesic and will
         * follow the curvature of the Earth. When false, edges of the polygon are
         * rendered as straight lines in screen space. Note that the shape of a
         * geodesic polygon may appear to change when dragged, as the dimensions
         * are maintained relative to the surface of the earth. Defaults to false.
         */
        this.geodesic = false;
        /**
         * The ordered sequence of coordinates that designates a closed loop.
         * Unlike polylines, a polygon may consist of one or more paths.
         *  As a result, the paths property may specify one or more arrays of
         * LatLng coordinates. Paths are closed automatically; do not repeat the
         * first vertex of the path as the last vertex. Simple polygons may be
         * defined using a single array of LatLngs. More complex polygons may
         * specify an array of arrays. Any simple arrays are converted into Arrays.
         * Inserting or removing LatLngs from the Array will automatically update
         * the polygon on the map.
         */
        this.paths = [];
        /**
         * This event is fired when the DOM click event is fired on the Polygon.
         */
        this.polyClick = new EventEmitter();
        /**
         * This event is fired when the DOM dblclick event is fired on the Polygon.
         */
        this.polyDblClick = new EventEmitter();
        /**
         * This event is repeatedly fired while the user drags the polygon.
         */
        this.polyDrag = new EventEmitter();
        /**
         * This event is fired when the user stops dragging the polygon.
         */
        this.polyDragEnd = new EventEmitter();
        /**
         * This event is fired when the user starts dragging the polygon.
         */
        this.polyDragStart = new EventEmitter();
        /**
         * This event is fired when the DOM mousedown event is fired on the Polygon.
         */
        this.polyMouseDown = new EventEmitter();
        /**
         * This event is fired when the DOM mousemove event is fired on the Polygon.
         */
        this.polyMouseMove = new EventEmitter();
        /**
         * This event is fired on Polygon mouseout.
         */
        this.polyMouseOut = new EventEmitter();
        /**
         * This event is fired on Polygon mouseover.
         */
        this.polyMouseOver = new EventEmitter();
        /**
         * This event is fired whe the DOM mouseup event is fired on the Polygon
         */
        this.polyMouseUp = new EventEmitter();
        /**
         * This event is fired when the Polygon is right-clicked on.
         */
        this.polyRightClick = new EventEmitter();
        /**
         * This event is fired after Polygon first path changes.
         */
        this.polyPathsChange = new EventEmitter();
        this._polygonAddedToManager = false;
        this._subscriptions = [];
    }
    /** @internal */
    ngAfterContentInit() {
        if (!this._polygonAddedToManager) {
            this._init();
        }
    }
    ngOnChanges(changes) {
        if (!this._polygonAddedToManager) {
            this._init();
            return;
        }
        this._polygonManager.setPolygonOptions(this, this._updatePolygonOptions(changes));
    }
    _init() {
        this._polygonManager.addPolygon(this);
        this._polygonAddedToManager = true;
        this._addEventListeners();
    }
    _addEventListeners() {
        const handlers = [
            { name: 'click', handler: (ev) => this.polyClick.emit(ev) },
            { name: 'dblclick', handler: (ev) => this.polyDblClick.emit(ev) },
            { name: 'drag', handler: (ev) => this.polyDrag.emit(ev) },
            { name: 'dragend', handler: (ev) => this.polyDragEnd.emit(ev) },
            { name: 'dragstart', handler: (ev) => this.polyDragStart.emit(ev) },
            { name: 'mousedown', handler: (ev) => this.polyMouseDown.emit(ev) },
            { name: 'mousemove', handler: (ev) => this.polyMouseMove.emit(ev) },
            { name: 'mouseout', handler: (ev) => this.polyMouseOut.emit(ev) },
            { name: 'mouseover', handler: (ev) => this.polyMouseOver.emit(ev) },
            { name: 'mouseup', handler: (ev) => this.polyMouseUp.emit(ev) },
            { name: 'rightclick', handler: (ev) => this.polyRightClick.emit(ev) },
        ];
        handlers.forEach((obj) => {
            const os = this._polygonManager.createEventObservable(obj.name, this).subscribe(obj.handler);
            this._subscriptions.push(os);
        });
        this._polygonManager.createPathEventObservable(this)
            .then(paths$ => {
            const os = paths$.subscribe(pathEvent => this.polyPathsChange.emit(pathEvent));
            this._subscriptions.push(os);
        });
    }
    _updatePolygonOptions(changes) {
        return Object.keys(changes)
            .filter(k => AgmPolygon._polygonOptionsAttributes.indexOf(k) !== -1)
            .reduce((obj, k) => {
            obj[k] = changes[k].currentValue;
            return obj;
        }, {});
    }
    /** @internal */
    id() { return this._id; }
    /** @internal */
    ngOnDestroy() {
        this._polygonManager.deletePolygon(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach((s) => s.unsubscribe());
    }
    getPath() {
        return this._polygonManager.getPath(this);
    }
    getPaths() {
        return this._polygonManager.getPaths(this);
    }
}
AgmPolygon._polygonOptionsAttributes = [
    'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'icon', 'map',
    'paths', 'strokeColor', 'strokeOpacity', 'strokeWeight', 'visible', 'zIndex', 'draggable',
    'editable', 'visible',
];
AgmPolygon.decorators = [
    { type: Directive, args: [{
                selector: 'agm-polygon',
            },] }
];
AgmPolygon.ctorParameters = () => [
    { type: PolygonManager }
];
AgmPolygon.propDecorators = {
    clickable: [{ type: Input }],
    draggable: [{ type: Input, args: ['polyDraggable',] }],
    editable: [{ type: Input }],
    fillColor: [{ type: Input }],
    fillOpacity: [{ type: Input }],
    geodesic: [{ type: Input }],
    paths: [{ type: Input }],
    strokeColor: [{ type: Input }],
    strokeOpacity: [{ type: Input }],
    strokeWeight: [{ type: Input }],
    visible: [{ type: Input }],
    zIndex: [{ type: Input }],
    polyClick: [{ type: Output }],
    polyDblClick: [{ type: Output }],
    polyDrag: [{ type: Output }],
    polyDragEnd: [{ type: Output }],
    polyDragStart: [{ type: Output }],
    polyMouseDown: [{ type: Output }],
    polyMouseMove: [{ type: Output }],
    polyMouseOut: [{ type: Output }],
    polyMouseOver: [{ type: Output }],
    polyMouseUp: [{ type: Output }],
    polyRightClick: [{ type: Output }],
    polyPathsChange: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWdvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi9kaXJlY3RpdmVzL3BvbHlnb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFvQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBd0IsTUFBTSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUc5SCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFHdEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWdERztBQUlILE1BQU0sT0FBTyxVQUFVO0lBc0pyQixZQUFvQixlQUErQjtRQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFySm5EOztXQUVHO1FBQ00sY0FBUyxHQUFHLElBQUksQ0FBQztRQUUxQjs7O1dBR0c7UUFDSCwyQ0FBMkM7UUFDbkIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUUxQzs7O1dBR0c7UUFDTSxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBYTFCOzs7Ozs7V0FNRztRQUNNLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFMUI7Ozs7Ozs7Ozs7V0FVRztRQUNNLFVBQUssR0FFb0QsRUFBRSxDQUFDO1FBNEJyRTs7V0FFRztRQUNPLGNBQVMsR0FBNkMsSUFBSSxZQUFZLEVBQThCLENBQUM7UUFFL0c7O1dBRUc7UUFDTyxpQkFBWSxHQUE2QyxJQUFJLFlBQVksRUFBOEIsQ0FBQztRQUVsSDs7V0FFRztRQUNPLGFBQVEsR0FBeUMsSUFBSSxZQUFZLEVBQTBCLENBQUM7UUFFdEc7O1dBRUc7UUFDTyxnQkFBVyxHQUF5QyxJQUFJLFlBQVksRUFBMEIsQ0FBQztRQUV6Rzs7V0FFRztRQUNPLGtCQUFhLEdBQXlDLElBQUksWUFBWSxFQUEwQixDQUFDO1FBRTNHOztXQUVHO1FBQ08sa0JBQWEsR0FBNkMsSUFBSSxZQUFZLEVBQThCLENBQUM7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LGNBQWM7Ozt3QkEyRHBCLEtBQUs7d0JBT0wsS0FBSyxTQUFDLGVBQWU7dUJBTXJCLEtBQUs7d0JBTUwsS0FBSzswQkFLTCxLQUFLO3VCQVNMLEtBQUs7b0JBYUwsS0FBSzswQkFRTCxLQUFLOzRCQUtMLEtBQUs7MkJBS0wsS0FBSztzQkFLTCxLQUFLO3FCQUtMLEtBQUs7d0JBS0wsTUFBTTsyQkFLTixNQUFNO3VCQUtOLE1BQU07MEJBS04sTUFBTTs0QkFLTixNQUFNOzRCQUtOLE1BQU07NEJBS04sTUFBTTsyQkFLTixNQUFNOzRCQUtOLE1BQU07MEJBS04sTUFBTTs2QkFLTixNQUFNOzhCQUtOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBQb2x5Z29uTWFuYWdlciB9IGZyb20gJy4uL3NlcnZpY2VzL21hbmFnZXJzL3BvbHlnb24tbWFuYWdlcic7XG5pbXBvcnQgeyBNVkNFdmVudCB9IGZyb20gJy4uL3V0aWxzL212Y2FycmF5LXV0aWxzJztcblxuLyoqXG4gKiBBZ21Qb2x5Z29uIHJlbmRlcnMgYSBwb2x5Z29uIG9uIGEge0BsaW5rIEFnbU1hcH1cbiAqXG4gKiAjIyMgRXhhbXBsZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4gKlxuICogQENvbXBvbmVudCh7XG4gKiAgc2VsZWN0b3I6ICdteS1tYXAtY21wJyxcbiAqICBzdHlsZXM6IFtgXG4gKiAgICBhZ20tbWFwIHtcbiAqICAgICAgaGVpZ2h0OiAzMDBweDtcbiAqICAgIH1cbiAqIGBdLFxuICogIHRlbXBsYXRlOiBgXG4gKiAgICA8YWdtLW1hcCBbbGF0aXR1ZGVdPVwibGF0XCIgW2xvbmdpdHVkZV09XCJsbmdcIiBbem9vbV09XCJ6b29tXCI+XG4gKiAgICAgIDxhZ20tcG9seWdvbiBbcGF0aHNdPVwicGF0aHNcIj5cbiAqICAgICAgPC9hZ20tcG9seWdvbj5cbiAqICAgIDwvYWdtLW1hcD5cbiAqICBgXG4gKiB9KVxuICogZXhwb3J0IGNsYXNzIE15TWFwQ21wIHtcbiAqICAgbGF0OiBudW1iZXIgPSAwO1xuICogICBsbmc6IG51bWJlciA9IDA7XG4gKiAgIHpvb206IG51bWJlciA9IDEwO1xuICogICBwYXRoczogTGF0TG5nTGl0ZXJhbFtdID0gW1xuICogICAgIHsgbGF0OiAwLCAgbG5nOiAxMCB9LFxuICogICAgIHsgbGF0OiAwLCAgbG5nOiAyMCB9LFxuICogICAgIHsgbGF0OiAxMCwgbG5nOiAyMCB9LFxuICogICAgIHsgbGF0OiAxMCwgbG5nOiAxMCB9LFxuICogICAgIHsgbGF0OiAwLCAgbG5nOiAxMCB9XG4gKiAgIF1cbiAqICAgLy8gTmVzdGluZyBwYXRocyB3aWxsIGNyZWF0ZSBhIGhvbGUgd2hlcmUgdGhleSBvdmVybGFwO1xuICogICBuZXN0ZWRQYXRoczogTGF0TG5nTGl0ZXJhbFtdW10gPSBbW1xuICogICAgIHsgbGF0OiAwLCAgbG5nOiAxMCB9LFxuICogICAgIHsgbGF0OiAwLCAgbG5nOiAyMCB9LFxuICogICAgIHsgbGF0OiAxMCwgbG5nOiAyMCB9LFxuICogICAgIHsgbGF0OiAxMCwgbG5nOiAxMCB9LFxuICogICAgIHsgbGF0OiAwLCAgbG5nOiAxMCB9XG4gKiAgIF0sIFtcbiAqICAgICB7IGxhdDogMCwgbG5nOiAxNSB9LFxuICogICAgIHsgbGF0OiAwLCBsbmc6IDIwIH0sXG4gKiAgICAgeyBsYXQ6IDUsIGxuZzogMjAgfSxcbiAqICAgICB7IGxhdDogNSwgbG5nOiAxNSB9LFxuICogICAgIHsgbGF0OiAwLCBsbmc6IDE1IH1cbiAqICAgXV1cbiAqIH1cbiAqIGBgYFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdhZ20tcG9seWdvbicsXG59KVxuZXhwb3J0IGNsYXNzIEFnbVBvbHlnb24gaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGlzIFBvbHlnb24gaGFuZGxlcyBtb3VzZSBldmVudHMuIERlZmF1bHRzIHRvIHRydWUuXG4gICAqL1xuICBASW5wdXQoKSBjbGlja2FibGUgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBJZiBzZXQgdG8gdHJ1ZSwgdGhlIHVzZXIgY2FuIGRyYWcgdGhpcyBzaGFwZSBvdmVyIHRoZSBtYXAuIFRoZSBnZW9kZXNpY1xuICAgKiBwcm9wZXJ0eSBkZWZpbmVzIHRoZSBtb2RlIG9mIGRyYWdnaW5nLiBEZWZhdWx0cyB0byBmYWxzZS5cbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCdwb2x5RHJhZ2dhYmxlJykgZHJhZ2dhYmxlID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIElmIHNldCB0byB0cnVlLCB0aGUgdXNlciBjYW4gZWRpdCB0aGlzIHNoYXBlIGJ5IGRyYWdnaW5nIHRoZSBjb250cm9sXG4gICAqIHBvaW50cyBzaG93biBhdCB0aGUgdmVydGljZXMgYW5kIG9uIGVhY2ggc2VnbWVudC4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAqL1xuICBASW5wdXQoKSBlZGl0YWJsZSA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUaGUgZmlsbCBjb2xvci4gQWxsIENTUzMgY29sb3JzIGFyZSBzdXBwb3J0ZWQgZXhjZXB0IGZvciBleHRlbmRlZFxuICAgKiBuYW1lZCBjb2xvcnMuXG4gICAqL1xuICBASW5wdXQoKSBmaWxsQ29sb3I6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGZpbGwgb3BhY2l0eSBiZXR3ZWVuIDAuMCBhbmQgMS4wXG4gICAqL1xuICBASW5wdXQoKSBmaWxsT3BhY2l0eTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIGVkZ2VzIG9mIHRoZSBwb2x5Z29uIGFyZSBpbnRlcnByZXRlZCBhcyBnZW9kZXNpYyBhbmQgd2lsbFxuICAgKiBmb2xsb3cgdGhlIGN1cnZhdHVyZSBvZiB0aGUgRWFydGguIFdoZW4gZmFsc2UsIGVkZ2VzIG9mIHRoZSBwb2x5Z29uIGFyZVxuICAgKiByZW5kZXJlZCBhcyBzdHJhaWdodCBsaW5lcyBpbiBzY3JlZW4gc3BhY2UuIE5vdGUgdGhhdCB0aGUgc2hhcGUgb2YgYVxuICAgKiBnZW9kZXNpYyBwb2x5Z29uIG1heSBhcHBlYXIgdG8gY2hhbmdlIHdoZW4gZHJhZ2dlZCwgYXMgdGhlIGRpbWVuc2lvbnNcbiAgICogYXJlIG1haW50YWluZWQgcmVsYXRpdmUgdG8gdGhlIHN1cmZhY2Ugb2YgdGhlIGVhcnRoLiBEZWZhdWx0cyB0byBmYWxzZS5cbiAgICovXG4gIEBJbnB1dCgpIGdlb2Rlc2ljID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRoZSBvcmRlcmVkIHNlcXVlbmNlIG9mIGNvb3JkaW5hdGVzIHRoYXQgZGVzaWduYXRlcyBhIGNsb3NlZCBsb29wLlxuICAgKiBVbmxpa2UgcG9seWxpbmVzLCBhIHBvbHlnb24gbWF5IGNvbnNpc3Qgb2Ygb25lIG9yIG1vcmUgcGF0aHMuXG4gICAqICBBcyBhIHJlc3VsdCwgdGhlIHBhdGhzIHByb3BlcnR5IG1heSBzcGVjaWZ5IG9uZSBvciBtb3JlIGFycmF5cyBvZlxuICAgKiBMYXRMbmcgY29vcmRpbmF0ZXMuIFBhdGhzIGFyZSBjbG9zZWQgYXV0b21hdGljYWxseTsgZG8gbm90IHJlcGVhdCB0aGVcbiAgICogZmlyc3QgdmVydGV4IG9mIHRoZSBwYXRoIGFzIHRoZSBsYXN0IHZlcnRleC4gU2ltcGxlIHBvbHlnb25zIG1heSBiZVxuICAgKiBkZWZpbmVkIHVzaW5nIGEgc2luZ2xlIGFycmF5IG9mIExhdExuZ3MuIE1vcmUgY29tcGxleCBwb2x5Z29ucyBtYXlcbiAgICogc3BlY2lmeSBhbiBhcnJheSBvZiBhcnJheXMuIEFueSBzaW1wbGUgYXJyYXlzIGFyZSBjb252ZXJ0ZWQgaW50byBBcnJheXMuXG4gICAqIEluc2VydGluZyBvciByZW1vdmluZyBMYXRMbmdzIGZyb20gdGhlIEFycmF5IHdpbGwgYXV0b21hdGljYWxseSB1cGRhdGVcbiAgICogdGhlIHBvbHlnb24gb24gdGhlIG1hcC5cbiAgICovXG4gIEBJbnB1dCgpIHBhdGhzOiBnb29nbGUubWFwcy5MYXRMbmdbXSB8IGdvb2dsZS5tYXBzLkxhdExuZ1tdW10gfFxuICAgICAgZ29vZ2xlLm1hcHMuTVZDQXJyYXk8Z29vZ2xlLm1hcHMuTGF0TG5nPiB8IGdvb2dsZS5tYXBzLk1WQ0FycmF5PGdvb2dsZS5tYXBzLk1WQ0FycmF5PGdvb2dsZS5tYXBzLkxhdExuZz4+IHxcbiAgICAgIGdvb2dsZS5tYXBzLkxhdExuZ0xpdGVyYWxbXSB8IGdvb2dsZS5tYXBzLkxhdExuZ0xpdGVyYWxbXVtdID0gW107XG5cbiAgLyoqXG4gICAqIFRoZSBzdHJva2UgY29sb3IuIEFsbCBDU1MzIGNvbG9ycyBhcmUgc3VwcG9ydGVkIGV4Y2VwdCBmb3IgZXh0ZW5kZWRcbiAgICogbmFtZWQgY29sb3JzLlxuICAgKi9cbiAgQElucHV0KCkgc3Ryb2tlQ29sb3I6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHN0cm9rZSBvcGFjaXR5IGJldHdlZW4gMC4wIGFuZCAxLjBcbiAgICovXG4gIEBJbnB1dCgpIHN0cm9rZU9wYWNpdHk6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIHN0cm9rZSB3aWR0aCBpbiBwaXhlbHMuXG4gICAqL1xuICBASW5wdXQoKSBzdHJva2VXZWlnaHQ6IG51bWJlcjtcblxuICAvKipcbiAgICogV2hldGhlciB0aGlzIHBvbHlnb24gaXMgdmlzaWJsZSBvbiB0aGUgbWFwLiBEZWZhdWx0cyB0byB0cnVlLlxuICAgKi9cbiAgQElucHV0KCkgdmlzaWJsZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogVGhlIHpJbmRleCBjb21wYXJlZCB0byBvdGhlciBwb2x5cy5cbiAgICovXG4gIEBJbnB1dCgpIHpJbmRleDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIERPTSBjbGljayBldmVudCBpcyBmaXJlZCBvbiB0aGUgUG9seWdvbi5cbiAgICovXG4gIEBPdXRwdXQoKSBwb2x5Q2xpY2s6IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Qb2x5TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLlBvbHlNb3VzZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIERPTSBkYmxjbGljayBldmVudCBpcyBmaXJlZCBvbiB0aGUgUG9seWdvbi5cbiAgICovXG4gIEBPdXRwdXQoKSBwb2x5RGJsQ2xpY2s6IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Qb2x5TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLlBvbHlNb3VzZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIHJlcGVhdGVkbHkgZmlyZWQgd2hpbGUgdGhlIHVzZXIgZHJhZ3MgdGhlIHBvbHlnb24uXG4gICAqL1xuICBAT3V0cHV0KCkgcG9seURyYWc6IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTW91c2VFdmVudD4oKTtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSB1c2VyIHN0b3BzIGRyYWdnaW5nIHRoZSBwb2x5Z29uLlxuICAgKi9cbiAgQE91dHB1dCgpIHBvbHlEcmFnRW5kOiBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgdXNlciBzdGFydHMgZHJhZ2dpbmcgdGhlIHBvbHlnb24uXG4gICAqL1xuICBAT3V0cHV0KCkgcG9seURyYWdTdGFydDogRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIERPTSBtb3VzZWRvd24gZXZlbnQgaXMgZmlyZWQgb24gdGhlIFBvbHlnb24uXG4gICAqL1xuICBAT3V0cHV0KCkgcG9seU1vdXNlRG93bjogRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLlBvbHlNb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuUG9seU1vdXNlRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgRE9NIG1vdXNlbW92ZSBldmVudCBpcyBmaXJlZCBvbiB0aGUgUG9seWdvbi5cbiAgICovXG4gIEBPdXRwdXQoKSBwb2x5TW91c2VNb3ZlOiBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuUG9seU1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Qb2x5TW91c2VFdmVudD4oKTtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCBvbiBQb2x5Z29uIG1vdXNlb3V0LlxuICAgKi9cbiAgQE91dHB1dCgpIHBvbHlNb3VzZU91dDogRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLlBvbHlNb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuUG9seU1vdXNlRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgb24gUG9seWdvbiBtb3VzZW92ZXIuXG4gICAqL1xuICBAT3V0cHV0KCkgcG9seU1vdXNlT3ZlcjogRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLlBvbHlNb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuUG9seU1vdXNlRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlIHRoZSBET00gbW91c2V1cCBldmVudCBpcyBmaXJlZCBvbiB0aGUgUG9seWdvblxuICAgKi9cbiAgQE91dHB1dCgpIHBvbHlNb3VzZVVwOiBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuUG9seU1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Qb2x5TW91c2VFdmVudD4oKTtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBQb2x5Z29uIGlzIHJpZ2h0LWNsaWNrZWQgb24uXG4gICAqL1xuICBAT3V0cHV0KCkgcG9seVJpZ2h0Q2xpY2s6IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Qb2x5TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLlBvbHlNb3VzZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIGFmdGVyIFBvbHlnb24gZmlyc3QgcGF0aCBjaGFuZ2VzLlxuICAgKi9cbiAgQE91dHB1dCgpIHBvbHlQYXRoc0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TVZDRXZlbnQ8Z29vZ2xlLm1hcHMuTGF0TG5nW10gfCBnb29nbGUubWFwcy5MYXRMbmdMaXRlcmFsW10+PigpO1xuXG4gIHByaXZhdGUgc3RhdGljIF9wb2x5Z29uT3B0aW9uc0F0dHJpYnV0ZXM6IHN0cmluZ1tdID0gW1xuICAgICdjbGlja2FibGUnLCAnZHJhZ2dhYmxlJywgJ2VkaXRhYmxlJywgJ2ZpbGxDb2xvcicsICdmaWxsT3BhY2l0eScsICdnZW9kZXNpYycsICdpY29uJywgJ21hcCcsXG4gICAgJ3BhdGhzJywgJ3N0cm9rZUNvbG9yJywgJ3N0cm9rZU9wYWNpdHknLCAnc3Ryb2tlV2VpZ2h0JywgJ3Zpc2libGUnLCAnekluZGV4JywgJ2RyYWdnYWJsZScsXG4gICAgJ2VkaXRhYmxlJywgJ3Zpc2libGUnLFxuICBdO1xuXG4gIHByaXZhdGUgX2lkOiBzdHJpbmc7XG4gIHByaXZhdGUgX3BvbHlnb25BZGRlZFRvTWFuYWdlciA9IGZhbHNlO1xuICBwcml2YXRlIF9zdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3BvbHlnb25NYW5hZ2VyOiBQb2x5Z29uTWFuYWdlcikgeyB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgaWYgKCF0aGlzLl9wb2x5Z29uQWRkZWRUb01hbmFnZXIpIHtcbiAgICAgIHRoaXMuX2luaXQoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogYW55IHtcbiAgICBpZiAoIXRoaXMuX3BvbHlnb25BZGRlZFRvTWFuYWdlcikge1xuICAgICAgdGhpcy5faW5pdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3BvbHlnb25NYW5hZ2VyLnNldFBvbHlnb25PcHRpb25zKHRoaXMsIHRoaXMuX3VwZGF0ZVBvbHlnb25PcHRpb25zKGNoYW5nZXMpKTtcbiAgfVxuXG4gIHByaXZhdGUgX2luaXQoKSB7XG4gICAgdGhpcy5fcG9seWdvbk1hbmFnZXIuYWRkUG9seWdvbih0aGlzKTtcbiAgICB0aGlzLl9wb2x5Z29uQWRkZWRUb01hbmFnZXIgPSB0cnVlO1xuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICBwcml2YXRlIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IFtcbiAgICAgIHsgbmFtZTogJ2NsaWNrJywgaGFuZGxlcjogKGV2OiBnb29nbGUubWFwcy5Qb2x5TW91c2VFdmVudCkgPT4gdGhpcy5wb2x5Q2xpY2suZW1pdChldikgfSxcbiAgICAgIHsgbmFtZTogJ2RibGNsaWNrJywgaGFuZGxlcjogKGV2OiBnb29nbGUubWFwcy5Qb2x5TW91c2VFdmVudCkgPT4gdGhpcy5wb2x5RGJsQ2xpY2suZW1pdChldikgfSxcbiAgICAgIHsgbmFtZTogJ2RyYWcnLCBoYW5kbGVyOiAoZXY6IGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQpID0+IHRoaXMucG9seURyYWcuZW1pdChldikgfSxcbiAgICAgIHsgbmFtZTogJ2RyYWdlbmQnLCBoYW5kbGVyOiAoZXY6IGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQpID0+IHRoaXMucG9seURyYWdFbmQuZW1pdChldikgfSxcbiAgICAgIHsgbmFtZTogJ2RyYWdzdGFydCcsIGhhbmRsZXI6IChldjogZ29vZ2xlLm1hcHMuTW91c2VFdmVudCkgPT4gdGhpcy5wb2x5RHJhZ1N0YXJ0LmVtaXQoZXYpIH0sXG4gICAgICB7IG5hbWU6ICdtb3VzZWRvd24nLCBoYW5kbGVyOiAoZXY6IGdvb2dsZS5tYXBzLlBvbHlNb3VzZUV2ZW50KSA9PiB0aGlzLnBvbHlNb3VzZURvd24uZW1pdChldikgfSxcbiAgICAgIHsgbmFtZTogJ21vdXNlbW92ZScsIGhhbmRsZXI6IChldjogZ29vZ2xlLm1hcHMuUG9seU1vdXNlRXZlbnQpID0+IHRoaXMucG9seU1vdXNlTW92ZS5lbWl0KGV2KSB9LFxuICAgICAgeyBuYW1lOiAnbW91c2VvdXQnLCBoYW5kbGVyOiAoZXY6IGdvb2dsZS5tYXBzLlBvbHlNb3VzZUV2ZW50KSA9PiB0aGlzLnBvbHlNb3VzZU91dC5lbWl0KGV2KSB9LFxuICAgICAgeyBuYW1lOiAnbW91c2VvdmVyJywgaGFuZGxlcjogKGV2OiBnb29nbGUubWFwcy5Qb2x5TW91c2VFdmVudCkgPT4gdGhpcy5wb2x5TW91c2VPdmVyLmVtaXQoZXYpIH0sXG4gICAgICB7IG5hbWU6ICdtb3VzZXVwJywgaGFuZGxlcjogKGV2OiBnb29nbGUubWFwcy5Qb2x5TW91c2VFdmVudCkgPT4gdGhpcy5wb2x5TW91c2VVcC5lbWl0KGV2KSB9LFxuICAgICAgeyBuYW1lOiAncmlnaHRjbGljaycsIGhhbmRsZXI6IChldjogZ29vZ2xlLm1hcHMuUG9seU1vdXNlRXZlbnQpID0+IHRoaXMucG9seVJpZ2h0Q2xpY2suZW1pdChldikgfSxcbiAgICBdO1xuICAgIGhhbmRsZXJzLmZvckVhY2goKG9iaikgPT4ge1xuICAgICAgY29uc3Qgb3MgPSB0aGlzLl9wb2x5Z29uTWFuYWdlci5jcmVhdGVFdmVudE9ic2VydmFibGUob2JqLm5hbWUsIHRoaXMpLnN1YnNjcmliZShvYmouaGFuZGxlcik7XG4gICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnB1c2gob3MpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fcG9seWdvbk1hbmFnZXIuY3JlYXRlUGF0aEV2ZW50T2JzZXJ2YWJsZSh0aGlzKVxuICAgIC50aGVuKHBhdGhzJCA9PiB7XG4gICAgICBjb25zdCBvcyA9IHBhdGhzJC5zdWJzY3JpYmUocGF0aEV2ZW50ID0+IHRoaXMucG9seVBhdGhzQ2hhbmdlLmVtaXQocGF0aEV2ZW50KSk7XG4gICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnB1c2gob3MpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlUG9seWdvbk9wdGlvbnMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IGdvb2dsZS5tYXBzLlBvbHlnb25PcHRpb25zIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoY2hhbmdlcylcbiAgICAgIC5maWx0ZXIoayA9PiBBZ21Qb2x5Z29uLl9wb2x5Z29uT3B0aW9uc0F0dHJpYnV0ZXMuaW5kZXhPZihrKSAhPT0gLTEpXG4gICAgICAucmVkdWNlKChvYmo6IGFueSwgazogc3RyaW5nKSA9PiB7XG4gICAgICAgIG9ialtrXSA9IGNoYW5nZXNba10uY3VycmVudFZhbHVlO1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgfSwge30pO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBpZCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5faWQ7IH1cblxuICAvKiogQGludGVybmFsICovXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX3BvbHlnb25NYW5hZ2VyLmRlbGV0ZVBvbHlnb24odGhpcyk7XG4gICAgLy8gdW5zdWJzY3JpYmUgYWxsIHJlZ2lzdGVyZWQgb2JzZXJ2YWJsZSBzdWJzY3JpcHRpb25zXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5mb3JFYWNoKChzKSA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuICB9XG5cbiAgZ2V0UGF0aCgpOiBQcm9taXNlPGdvb2dsZS5tYXBzLkxhdExuZ1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuX3BvbHlnb25NYW5hZ2VyLmdldFBhdGgodGhpcyk7XG4gIH1cblxuICBnZXRQYXRocygpOiBQcm9taXNlPGdvb2dsZS5tYXBzLkxhdExuZ1tdW10+IHtcbiAgICByZXR1cm4gdGhpcy5fcG9seWdvbk1hbmFnZXIuZ2V0UGF0aHModGhpcyk7XG4gIH1cbn1cbiJdfQ==