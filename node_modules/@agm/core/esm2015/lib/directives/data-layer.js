import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { DataLayerManager } from './../services/managers/data-layer-manager';
let layerId = 0;
/**
 * AgmDataLayer enables the user to add data layers to the map.
 *
 * ### Example
 * ```typescript
 * import { Component } from 'angular2/core';
 * import { AgmMap, AgmDataLayer } from
 * 'angular-google-maps/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  directives: [AgmMap, AgmDataLayer],
 *  styles: [`
 *    .agm-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 * <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 * 	  <agm-data-layer [geoJson]="geoJsonObject" (layerClick)="clicked($event)" [style]="styleFunc">
 * 	  </agm-data-layer>
 * </agm-map>
 *  `
 * })
 * export class MyMapCmp {
 *   lat: number = -25.274449;
 *   lng: number = 133.775060;
 *   zoom: number = 5;
 *
 * clicked(clickEvent) {
 *    console.log(clickEvent);
 *  }
 *
 *  styleFunc(feature) {
 *    return ({
 *      clickable: false,
 *      fillColor: feature.getProperty('color'),
 *      strokeWeight: 1
 *    });
 *  }
 *
 *  geoJsonObject: Object = {
 *    "type": "FeatureCollection",
 *    "features": [
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "G",
 *          "color": "blue",
 *          "rank": "7",
 *          "ascii": "71"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [123.61, -22.14], [122.38, -21.73], [121.06, -21.69], [119.66, -22.22], [119.00, -23.40],
 *              [118.65, -24.76], [118.43, -26.07], [118.78, -27.56], [119.22, -28.57], [120.23, -29.49],
 *              [121.77, -29.87], [123.57, -29.64], [124.45, -29.03], [124.71, -27.95], [124.80, -26.70],
 *              [124.80, -25.60], [123.61, -25.64], [122.56, -25.64], [121.72, -25.72], [121.81, -26.62],
 *              [121.86, -26.98], [122.60, -26.90], [123.57, -27.05], [123.57, -27.68], [123.35, -28.18],
 *              [122.51, -28.38], [121.77, -28.26], [121.02, -27.91], [120.49, -27.21], [120.14, -26.50],
 *              [120.10, -25.64], [120.27, -24.52], [120.67, -23.68], [121.72, -23.32], [122.43, -23.48],
 *              [123.04, -24.04], [124.54, -24.28], [124.58, -23.20], [123.61, -22.14]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "o",
 *          "color": "red",
 *          "rank": "15",
 *          "ascii": "111"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [128.84, -25.76], [128.18, -25.60], [127.96, -25.52], [127.88, -25.52], [127.70, -25.60],
 *              [127.26, -25.79], [126.60, -26.11], [126.16, -26.78], [126.12, -27.68], [126.21, -28.42],
 *              [126.69, -29.49], [127.74, -29.80], [128.80, -29.72], [129.41, -29.03], [129.72, -27.95],
 *              [129.68, -27.21], [129.33, -26.23], [128.84, -25.76]
 *            ],
 *            [
 *              [128.45, -27.44], [128.32, -26.94], [127.70, -26.82], [127.35, -27.05], [127.17, -27.80],
 *              [127.57, -28.22], [128.10, -28.42], [128.49, -27.80], [128.45, -27.44]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "o",
 *          "color": "yellow",
 *          "rank": "15",
 *          "ascii": "111"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [131.87, -25.76], [131.35, -26.07], [130.95, -26.78], [130.82, -27.64], [130.86, -28.53],
 *              [131.26, -29.22], [131.92, -29.76], [132.45, -29.87], [133.06, -29.76], [133.72, -29.34],
 *              [134.07, -28.80], [134.20, -27.91], [134.07, -27.21], [133.81, -26.31], [133.37, -25.83],
 *              [132.71, -25.64], [131.87, -25.76]
 *            ],
 *            [
 *              [133.15, -27.17], [132.71, -26.86], [132.09, -26.90], [131.74, -27.56], [131.79, -28.26],
 *              [132.36, -28.45], [132.93, -28.34], [133.15, -27.76], [133.15, -27.17]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "g",
 *          "color": "blue",
 *          "rank": "7",
 *          "ascii": "103"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [138.12, -25.04], [136.84, -25.16], [135.96, -25.36], [135.26, -25.99], [135, -26.90],
 *              [135.04, -27.91], [135.26, -28.88], [136.05, -29.45], [137.02, -29.49], [137.81, -29.49],
 *              [137.94, -29.99], [137.90, -31.20], [137.85, -32.24], [136.88, -32.69], [136.45, -32.36],
 *              [136.27, -31.80], [134.95, -31.84], [135.17, -32.99], [135.52, -33.43], [136.14, -33.76],
 *              [137.06, -33.83], [138.12, -33.65], [138.86, -33.21], [139.30, -32.28], [139.30, -31.24],
 *              [139.30, -30.14], [139.21, -28.96], [139.17, -28.22], [139.08, -27.41], [139.08, -26.47],
 *              [138.99, -25.40], [138.73, -25.00], [138.12, -25.04]
 *            ],
 *            [
 *              [137.50, -26.54], [136.97, -26.47], [136.49, -26.58], [136.31, -27.13], [136.31, -27.72],
 *              [136.58, -27.99], [137.50, -28.03], [137.68, -27.68], [137.59, -26.78], [137.50, -26.54]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "l",
 *          "color": "green",
 *          "rank": "12",
 *          "ascii": "108"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [140.14, -21.04], [140.31, -29.42], [141.67, -29.49], [141.59, -20.92], [140.14, -21.04]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "e",
 *          "color": "red",
 *          "rank": "5",
 *          "ascii": "101"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [144.14, -27.41], [145.67, -27.52], [146.86, -27.09], [146.82, -25.64], [146.25, -25.04],
 *              [145.45, -24.68], [144.66, -24.60], [144.09, -24.76], [143.43, -25.08], [142.99, -25.40],
 *              [142.64, -26.03], [142.64, -27.05], [142.64, -28.26], [143.30, -29.11], [144.18, -29.57],
 *              [145.41, -29.64], [146.46, -29.19], [146.64, -28.72], [146.82, -28.14], [144.84, -28.42],
 *              [144.31, -28.26], [144.14, -27.41]
 *            ],
 *            [
 *              [144.18, -26.39], [144.53, -26.58], [145.19, -26.62], [145.72, -26.35], [145.81, -25.91],
 *              [145.41, -25.68], [144.97, -25.68], [144.49, -25.64], [144, -25.99], [144.18, -26.39]
 *            ]
 *          ]
 *        }
 *      }
 *    ]
 *  };
 * }
 * ```
 */
export class AgmDataLayer {
    constructor(_manager) {
        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId++).toString();
        this._subscriptions = [];
        /**
         * This event is fired when a feature in the layer is clicked.
         */
        this.layerClick = new EventEmitter();
        /**
         * The geoJson to be displayed
         */
        this.geoJson = null;
    }
    ngOnInit() {
        if (this._addedToManager) {
            return;
        }
        this._manager.addDataLayer(this);
        this._addedToManager = true;
        this._addEventListeners();
    }
    _addEventListeners() {
        const listeners = [
            { name: 'click', handler: (ev) => this.layerClick.emit(ev) },
        ];
        listeners.forEach((obj) => {
            const os = this._manager.createEventObservable(obj.name, this).subscribe(obj.handler);
            this._subscriptions.push(os);
        });
    }
    /** @internal */
    id() { return this._id; }
    /** @internal */
    toString() { return `AgmDataLayer-${this._id.toString()}`; }
    /** @internal */
    ngOnDestroy() {
        this._manager.deleteDataLayer(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(s => s.unsubscribe());
    }
    /** @internal */
    ngOnChanges(changes) {
        if (!this._addedToManager) {
            return;
        }
        // tslint:disable-next-line: no-string-literal
        const geoJsonChange = changes['geoJson'];
        if (geoJsonChange) {
            this._manager.updateGeoJson(this, geoJsonChange.currentValue);
        }
        const dataOptions = AgmDataLayer._dataOptionsAttributes.reduce((options, k) => options[k] = changes.hasOwnProperty(k) ? changes[k].currentValue : this[k], {});
        this._manager.setDataOptions(this, dataOptions);
    }
}
AgmDataLayer._dataOptionsAttributes = ['style'];
AgmDataLayer.decorators = [
    { type: Directive, args: [{
                selector: 'agm-data-layer',
            },] }
];
AgmDataLayer.ctorParameters = () => [
    { type: DataLayerManager }
];
AgmDataLayer.propDecorators = {
    layerClick: [{ type: Output }],
    geoJson: [{ type: Input }],
    style: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1sYXllci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi9kaXJlY3RpdmVzL2RhdGEtbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFnQyxNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR3BILE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRTdFLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztBQUVoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNkxHO0FBSUgsTUFBTSxPQUFPLFlBQVk7SUFzQnZCLFlBQW9CLFFBQTBCO1FBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO1FBbkJ0QyxvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUN4QixRQUFHLEdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3JDLG1CQUFjLEdBQW1CLEVBQUUsQ0FBQztRQUU1Qzs7V0FFRztRQUNPLGVBQVUsR0FBOEMsSUFBSSxZQUFZLEVBQStCLENBQUM7UUFFbEg7O1dBRUc7UUFDTSxZQUFPLEdBQTJCLElBQUksQ0FBQztJQU9FLENBQUM7SUFFbkQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRU8sa0JBQWtCO1FBQ3hCLE1BQU0sU0FBUyxHQUFHO1lBQ2hCLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUErQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRTtTQUMxRixDQUFDO1FBQ0YsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ3hCLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3RGLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGdCQUFnQjtJQUNoQixFQUFFLEtBQWEsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUVqQyxnQkFBZ0I7SUFDaEIsUUFBUSxLQUFhLE9BQU8sZ0JBQWdCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFcEUsZ0JBQWdCO0lBQ2hCLFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxzREFBc0Q7UUFDdEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsZ0JBQWdCO0lBQ2hCLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN6QixPQUFPO1NBQ1I7UUFFRCw4Q0FBOEM7UUFDOUMsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3pDLElBQUksYUFBYSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDL0Q7UUFFRCxNQUFNLFdBQVcsR0FBRyxZQUFZLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUErQixDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUMxRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUUsSUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRTNGLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNsRCxDQUFDOztBQXZFYyxtQ0FBc0IsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztZQUpuRCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjthQUMzQjs7O1lBcE1RLGdCQUFnQjs7O3lCQStNdEIsTUFBTTtzQkFLTixLQUFLO29CQUtMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERhdGFMYXllck1hbmFnZXIgfSBmcm9tICcuLy4uL3NlcnZpY2VzL21hbmFnZXJzL2RhdGEtbGF5ZXItbWFuYWdlcic7XG5cbmxldCBsYXllcklkID0gMDtcblxuLyoqXG4gKiBBZ21EYXRhTGF5ZXIgZW5hYmxlcyB0aGUgdXNlciB0byBhZGQgZGF0YSBsYXllcnMgdG8gdGhlIG1hcC5cbiAqXG4gKiAjIyMgRXhhbXBsZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG4gKiBpbXBvcnQgeyBBZ21NYXAsIEFnbURhdGFMYXllciB9IGZyb21cbiAqICdhbmd1bGFyLWdvb2dsZS1tYXBzL2NvcmUnO1xuICpcbiAqIEBDb21wb25lbnQoe1xuICogIHNlbGVjdG9yOiAnbXktbWFwLWNtcCcsXG4gKiAgZGlyZWN0aXZlczogW0FnbU1hcCwgQWdtRGF0YUxheWVyXSxcbiAqICBzdHlsZXM6IFtgXG4gKiAgICAuYWdtLWNvbnRhaW5lciB7XG4gKiAgICAgIGhlaWdodDogMzAwcHg7XG4gKiAgICB9XG4gKiBgXSxcbiAqICB0ZW1wbGF0ZTogYFxuICogPGFnbS1tYXAgW2xhdGl0dWRlXT1cImxhdFwiIFtsb25naXR1ZGVdPVwibG5nXCIgW3pvb21dPVwiem9vbVwiPlxuICogXHQgIDxhZ20tZGF0YS1sYXllciBbZ2VvSnNvbl09XCJnZW9Kc29uT2JqZWN0XCIgKGxheWVyQ2xpY2spPVwiY2xpY2tlZCgkZXZlbnQpXCIgW3N0eWxlXT1cInN0eWxlRnVuY1wiPlxuICogXHQgIDwvYWdtLWRhdGEtbGF5ZXI+XG4gKiA8L2FnbS1tYXA+XG4gKiAgYFxuICogfSlcbiAqIGV4cG9ydCBjbGFzcyBNeU1hcENtcCB7XG4gKiAgIGxhdDogbnVtYmVyID0gLTI1LjI3NDQ0OTtcbiAqICAgbG5nOiBudW1iZXIgPSAxMzMuNzc1MDYwO1xuICogICB6b29tOiBudW1iZXIgPSA1O1xuICpcbiAqIGNsaWNrZWQoY2xpY2tFdmVudCkge1xuICogICAgY29uc29sZS5sb2coY2xpY2tFdmVudCk7XG4gKiAgfVxuICpcbiAqICBzdHlsZUZ1bmMoZmVhdHVyZSkge1xuICogICAgcmV0dXJuICh7XG4gKiAgICAgIGNsaWNrYWJsZTogZmFsc2UsXG4gKiAgICAgIGZpbGxDb2xvcjogZmVhdHVyZS5nZXRQcm9wZXJ0eSgnY29sb3InKSxcbiAqICAgICAgc3Ryb2tlV2VpZ2h0OiAxXG4gKiAgICB9KTtcbiAqICB9XG4gKlxuICogIGdlb0pzb25PYmplY3Q6IE9iamVjdCA9IHtcbiAqICAgIFwidHlwZVwiOiBcIkZlYXR1cmVDb2xsZWN0aW9uXCIsXG4gKiAgICBcImZlYXR1cmVzXCI6IFtcbiAqICAgICAge1xuICogICAgICAgIFwidHlwZVwiOiBcIkZlYXR1cmVcIixcbiAqICAgICAgICBcInByb3BlcnRpZXNcIjoge1xuICogICAgICAgICAgXCJsZXR0ZXJcIjogXCJHXCIsXG4gKiAgICAgICAgICBcImNvbG9yXCI6IFwiYmx1ZVwiLFxuICogICAgICAgICAgXCJyYW5rXCI6IFwiN1wiLFxuICogICAgICAgICAgXCJhc2NpaVwiOiBcIjcxXCJcbiAqICAgICAgICB9LFxuICogICAgICAgIFwiZ2VvbWV0cnlcIjoge1xuICogICAgICAgICAgXCJ0eXBlXCI6IFwiUG9seWdvblwiLFxuICogICAgICAgICAgXCJjb29yZGluYXRlc1wiOiBbXG4gKiAgICAgICAgICAgIFtcbiAqICAgICAgICAgICAgICBbMTIzLjYxLCAtMjIuMTRdLCBbMTIyLjM4LCAtMjEuNzNdLCBbMTIxLjA2LCAtMjEuNjldLCBbMTE5LjY2LCAtMjIuMjJdLCBbMTE5LjAwLCAtMjMuNDBdLFxuICogICAgICAgICAgICAgIFsxMTguNjUsIC0yNC43Nl0sIFsxMTguNDMsIC0yNi4wN10sIFsxMTguNzgsIC0yNy41Nl0sIFsxMTkuMjIsIC0yOC41N10sIFsxMjAuMjMsIC0yOS40OV0sXG4gKiAgICAgICAgICAgICAgWzEyMS43NywgLTI5Ljg3XSwgWzEyMy41NywgLTI5LjY0XSwgWzEyNC40NSwgLTI5LjAzXSwgWzEyNC43MSwgLTI3Ljk1XSwgWzEyNC44MCwgLTI2LjcwXSxcbiAqICAgICAgICAgICAgICBbMTI0LjgwLCAtMjUuNjBdLCBbMTIzLjYxLCAtMjUuNjRdLCBbMTIyLjU2LCAtMjUuNjRdLCBbMTIxLjcyLCAtMjUuNzJdLCBbMTIxLjgxLCAtMjYuNjJdLFxuICogICAgICAgICAgICAgIFsxMjEuODYsIC0yNi45OF0sIFsxMjIuNjAsIC0yNi45MF0sIFsxMjMuNTcsIC0yNy4wNV0sIFsxMjMuNTcsIC0yNy42OF0sIFsxMjMuMzUsIC0yOC4xOF0sXG4gKiAgICAgICAgICAgICAgWzEyMi41MSwgLTI4LjM4XSwgWzEyMS43NywgLTI4LjI2XSwgWzEyMS4wMiwgLTI3LjkxXSwgWzEyMC40OSwgLTI3LjIxXSwgWzEyMC4xNCwgLTI2LjUwXSxcbiAqICAgICAgICAgICAgICBbMTIwLjEwLCAtMjUuNjRdLCBbMTIwLjI3LCAtMjQuNTJdLCBbMTIwLjY3LCAtMjMuNjhdLCBbMTIxLjcyLCAtMjMuMzJdLCBbMTIyLjQzLCAtMjMuNDhdLFxuICogICAgICAgICAgICAgIFsxMjMuMDQsIC0yNC4wNF0sIFsxMjQuNTQsIC0yNC4yOF0sIFsxMjQuNTgsIC0yMy4yMF0sIFsxMjMuNjEsIC0yMi4xNF1cbiAqICAgICAgICAgICAgXVxuICogICAgICAgICAgXVxuICogICAgICAgIH1cbiAqICAgICAgfSxcbiAqICAgICAge1xuICogICAgICAgIFwidHlwZVwiOiBcIkZlYXR1cmVcIixcbiAqICAgICAgICBcInByb3BlcnRpZXNcIjoge1xuICogICAgICAgICAgXCJsZXR0ZXJcIjogXCJvXCIsXG4gKiAgICAgICAgICBcImNvbG9yXCI6IFwicmVkXCIsXG4gKiAgICAgICAgICBcInJhbmtcIjogXCIxNVwiLFxuICogICAgICAgICAgXCJhc2NpaVwiOiBcIjExMVwiXG4gKiAgICAgICAgfSxcbiAqICAgICAgICBcImdlb21ldHJ5XCI6IHtcbiAqICAgICAgICAgIFwidHlwZVwiOiBcIlBvbHlnb25cIixcbiAqICAgICAgICAgIFwiY29vcmRpbmF0ZXNcIjogW1xuICogICAgICAgICAgICBbXG4gKiAgICAgICAgICAgICAgWzEyOC44NCwgLTI1Ljc2XSwgWzEyOC4xOCwgLTI1LjYwXSwgWzEyNy45NiwgLTI1LjUyXSwgWzEyNy44OCwgLTI1LjUyXSwgWzEyNy43MCwgLTI1LjYwXSxcbiAqICAgICAgICAgICAgICBbMTI3LjI2LCAtMjUuNzldLCBbMTI2LjYwLCAtMjYuMTFdLCBbMTI2LjE2LCAtMjYuNzhdLCBbMTI2LjEyLCAtMjcuNjhdLCBbMTI2LjIxLCAtMjguNDJdLFxuICogICAgICAgICAgICAgIFsxMjYuNjksIC0yOS40OV0sIFsxMjcuNzQsIC0yOS44MF0sIFsxMjguODAsIC0yOS43Ml0sIFsxMjkuNDEsIC0yOS4wM10sIFsxMjkuNzIsIC0yNy45NV0sXG4gKiAgICAgICAgICAgICAgWzEyOS42OCwgLTI3LjIxXSwgWzEyOS4zMywgLTI2LjIzXSwgWzEyOC44NCwgLTI1Ljc2XVxuICogICAgICAgICAgICBdLFxuICogICAgICAgICAgICBbXG4gKiAgICAgICAgICAgICAgWzEyOC40NSwgLTI3LjQ0XSwgWzEyOC4zMiwgLTI2Ljk0XSwgWzEyNy43MCwgLTI2LjgyXSwgWzEyNy4zNSwgLTI3LjA1XSwgWzEyNy4xNywgLTI3LjgwXSxcbiAqICAgICAgICAgICAgICBbMTI3LjU3LCAtMjguMjJdLCBbMTI4LjEwLCAtMjguNDJdLCBbMTI4LjQ5LCAtMjcuODBdLCBbMTI4LjQ1LCAtMjcuNDRdXG4gKiAgICAgICAgICAgIF1cbiAqICAgICAgICAgIF1cbiAqICAgICAgICB9XG4gKiAgICAgIH0sXG4gKiAgICAgIHtcbiAqICAgICAgICBcInR5cGVcIjogXCJGZWF0dXJlXCIsXG4gKiAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAqICAgICAgICAgIFwibGV0dGVyXCI6IFwib1wiLFxuICogICAgICAgICAgXCJjb2xvclwiOiBcInllbGxvd1wiLFxuICogICAgICAgICAgXCJyYW5rXCI6IFwiMTVcIixcbiAqICAgICAgICAgIFwiYXNjaWlcIjogXCIxMTFcIlxuICogICAgICAgIH0sXG4gKiAgICAgICAgXCJnZW9tZXRyeVwiOiB7XG4gKiAgICAgICAgICBcInR5cGVcIjogXCJQb2x5Z29uXCIsXG4gKiAgICAgICAgICBcImNvb3JkaW5hdGVzXCI6IFtcbiAqICAgICAgICAgICAgW1xuICogICAgICAgICAgICAgIFsxMzEuODcsIC0yNS43Nl0sIFsxMzEuMzUsIC0yNi4wN10sIFsxMzAuOTUsIC0yNi43OF0sIFsxMzAuODIsIC0yNy42NF0sIFsxMzAuODYsIC0yOC41M10sXG4gKiAgICAgICAgICAgICAgWzEzMS4yNiwgLTI5LjIyXSwgWzEzMS45MiwgLTI5Ljc2XSwgWzEzMi40NSwgLTI5Ljg3XSwgWzEzMy4wNiwgLTI5Ljc2XSwgWzEzMy43MiwgLTI5LjM0XSxcbiAqICAgICAgICAgICAgICBbMTM0LjA3LCAtMjguODBdLCBbMTM0LjIwLCAtMjcuOTFdLCBbMTM0LjA3LCAtMjcuMjFdLCBbMTMzLjgxLCAtMjYuMzFdLCBbMTMzLjM3LCAtMjUuODNdLFxuICogICAgICAgICAgICAgIFsxMzIuNzEsIC0yNS42NF0sIFsxMzEuODcsIC0yNS43Nl1cbiAqICAgICAgICAgICAgXSxcbiAqICAgICAgICAgICAgW1xuICogICAgICAgICAgICAgIFsxMzMuMTUsIC0yNy4xN10sIFsxMzIuNzEsIC0yNi44Nl0sIFsxMzIuMDksIC0yNi45MF0sIFsxMzEuNzQsIC0yNy41Nl0sIFsxMzEuNzksIC0yOC4yNl0sXG4gKiAgICAgICAgICAgICAgWzEzMi4zNiwgLTI4LjQ1XSwgWzEzMi45MywgLTI4LjM0XSwgWzEzMy4xNSwgLTI3Ljc2XSwgWzEzMy4xNSwgLTI3LjE3XVxuICogICAgICAgICAgICBdXG4gKiAgICAgICAgICBdXG4gKiAgICAgICAgfVxuICogICAgICB9LFxuICogICAgICB7XG4gKiAgICAgICAgXCJ0eXBlXCI6IFwiRmVhdHVyZVwiLFxuICogICAgICAgIFwicHJvcGVydGllc1wiOiB7XG4gKiAgICAgICAgICBcImxldHRlclwiOiBcImdcIixcbiAqICAgICAgICAgIFwiY29sb3JcIjogXCJibHVlXCIsXG4gKiAgICAgICAgICBcInJhbmtcIjogXCI3XCIsXG4gKiAgICAgICAgICBcImFzY2lpXCI6IFwiMTAzXCJcbiAqICAgICAgICB9LFxuICogICAgICAgIFwiZ2VvbWV0cnlcIjoge1xuICogICAgICAgICAgXCJ0eXBlXCI6IFwiUG9seWdvblwiLFxuICogICAgICAgICAgXCJjb29yZGluYXRlc1wiOiBbXG4gKiAgICAgICAgICAgIFtcbiAqICAgICAgICAgICAgICBbMTM4LjEyLCAtMjUuMDRdLCBbMTM2Ljg0LCAtMjUuMTZdLCBbMTM1Ljk2LCAtMjUuMzZdLCBbMTM1LjI2LCAtMjUuOTldLCBbMTM1LCAtMjYuOTBdLFxuICogICAgICAgICAgICAgIFsxMzUuMDQsIC0yNy45MV0sIFsxMzUuMjYsIC0yOC44OF0sIFsxMzYuMDUsIC0yOS40NV0sIFsxMzcuMDIsIC0yOS40OV0sIFsxMzcuODEsIC0yOS40OV0sXG4gKiAgICAgICAgICAgICAgWzEzNy45NCwgLTI5Ljk5XSwgWzEzNy45MCwgLTMxLjIwXSwgWzEzNy44NSwgLTMyLjI0XSwgWzEzNi44OCwgLTMyLjY5XSwgWzEzNi40NSwgLTMyLjM2XSxcbiAqICAgICAgICAgICAgICBbMTM2LjI3LCAtMzEuODBdLCBbMTM0Ljk1LCAtMzEuODRdLCBbMTM1LjE3LCAtMzIuOTldLCBbMTM1LjUyLCAtMzMuNDNdLCBbMTM2LjE0LCAtMzMuNzZdLFxuICogICAgICAgICAgICAgIFsxMzcuMDYsIC0zMy44M10sIFsxMzguMTIsIC0zMy42NV0sIFsxMzguODYsIC0zMy4yMV0sIFsxMzkuMzAsIC0zMi4yOF0sIFsxMzkuMzAsIC0zMS4yNF0sXG4gKiAgICAgICAgICAgICAgWzEzOS4zMCwgLTMwLjE0XSwgWzEzOS4yMSwgLTI4Ljk2XSwgWzEzOS4xNywgLTI4LjIyXSwgWzEzOS4wOCwgLTI3LjQxXSwgWzEzOS4wOCwgLTI2LjQ3XSxcbiAqICAgICAgICAgICAgICBbMTM4Ljk5LCAtMjUuNDBdLCBbMTM4LjczLCAtMjUuMDBdLCBbMTM4LjEyLCAtMjUuMDRdXG4gKiAgICAgICAgICAgIF0sXG4gKiAgICAgICAgICAgIFtcbiAqICAgICAgICAgICAgICBbMTM3LjUwLCAtMjYuNTRdLCBbMTM2Ljk3LCAtMjYuNDddLCBbMTM2LjQ5LCAtMjYuNThdLCBbMTM2LjMxLCAtMjcuMTNdLCBbMTM2LjMxLCAtMjcuNzJdLFxuICogICAgICAgICAgICAgIFsxMzYuNTgsIC0yNy45OV0sIFsxMzcuNTAsIC0yOC4wM10sIFsxMzcuNjgsIC0yNy42OF0sIFsxMzcuNTksIC0yNi43OF0sIFsxMzcuNTAsIC0yNi41NF1cbiAqICAgICAgICAgICAgXVxuICogICAgICAgICAgXVxuICogICAgICAgIH1cbiAqICAgICAgfSxcbiAqICAgICAge1xuICogICAgICAgIFwidHlwZVwiOiBcIkZlYXR1cmVcIixcbiAqICAgICAgICBcInByb3BlcnRpZXNcIjoge1xuICogICAgICAgICAgXCJsZXR0ZXJcIjogXCJsXCIsXG4gKiAgICAgICAgICBcImNvbG9yXCI6IFwiZ3JlZW5cIixcbiAqICAgICAgICAgIFwicmFua1wiOiBcIjEyXCIsXG4gKiAgICAgICAgICBcImFzY2lpXCI6IFwiMTA4XCJcbiAqICAgICAgICB9LFxuICogICAgICAgIFwiZ2VvbWV0cnlcIjoge1xuICogICAgICAgICAgXCJ0eXBlXCI6IFwiUG9seWdvblwiLFxuICogICAgICAgICAgXCJjb29yZGluYXRlc1wiOiBbXG4gKiAgICAgICAgICAgIFtcbiAqICAgICAgICAgICAgICBbMTQwLjE0LCAtMjEuMDRdLCBbMTQwLjMxLCAtMjkuNDJdLCBbMTQxLjY3LCAtMjkuNDldLCBbMTQxLjU5LCAtMjAuOTJdLCBbMTQwLjE0LCAtMjEuMDRdXG4gKiAgICAgICAgICAgIF1cbiAqICAgICAgICAgIF1cbiAqICAgICAgICB9XG4gKiAgICAgIH0sXG4gKiAgICAgIHtcbiAqICAgICAgICBcInR5cGVcIjogXCJGZWF0dXJlXCIsXG4gKiAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAqICAgICAgICAgIFwibGV0dGVyXCI6IFwiZVwiLFxuICogICAgICAgICAgXCJjb2xvclwiOiBcInJlZFwiLFxuICogICAgICAgICAgXCJyYW5rXCI6IFwiNVwiLFxuICogICAgICAgICAgXCJhc2NpaVwiOiBcIjEwMVwiXG4gKiAgICAgICAgfSxcbiAqICAgICAgICBcImdlb21ldHJ5XCI6IHtcbiAqICAgICAgICAgIFwidHlwZVwiOiBcIlBvbHlnb25cIixcbiAqICAgICAgICAgIFwiY29vcmRpbmF0ZXNcIjogW1xuICogICAgICAgICAgICBbXG4gKiAgICAgICAgICAgICAgWzE0NC4xNCwgLTI3LjQxXSwgWzE0NS42NywgLTI3LjUyXSwgWzE0Ni44NiwgLTI3LjA5XSwgWzE0Ni44MiwgLTI1LjY0XSwgWzE0Ni4yNSwgLTI1LjA0XSxcbiAqICAgICAgICAgICAgICBbMTQ1LjQ1LCAtMjQuNjhdLCBbMTQ0LjY2LCAtMjQuNjBdLCBbMTQ0LjA5LCAtMjQuNzZdLCBbMTQzLjQzLCAtMjUuMDhdLCBbMTQyLjk5LCAtMjUuNDBdLFxuICogICAgICAgICAgICAgIFsxNDIuNjQsIC0yNi4wM10sIFsxNDIuNjQsIC0yNy4wNV0sIFsxNDIuNjQsIC0yOC4yNl0sIFsxNDMuMzAsIC0yOS4xMV0sIFsxNDQuMTgsIC0yOS41N10sXG4gKiAgICAgICAgICAgICAgWzE0NS40MSwgLTI5LjY0XSwgWzE0Ni40NiwgLTI5LjE5XSwgWzE0Ni42NCwgLTI4LjcyXSwgWzE0Ni44MiwgLTI4LjE0XSwgWzE0NC44NCwgLTI4LjQyXSxcbiAqICAgICAgICAgICAgICBbMTQ0LjMxLCAtMjguMjZdLCBbMTQ0LjE0LCAtMjcuNDFdXG4gKiAgICAgICAgICAgIF0sXG4gKiAgICAgICAgICAgIFtcbiAqICAgICAgICAgICAgICBbMTQ0LjE4LCAtMjYuMzldLCBbMTQ0LjUzLCAtMjYuNThdLCBbMTQ1LjE5LCAtMjYuNjJdLCBbMTQ1LjcyLCAtMjYuMzVdLCBbMTQ1LjgxLCAtMjUuOTFdLFxuICogICAgICAgICAgICAgIFsxNDUuNDEsIC0yNS42OF0sIFsxNDQuOTcsIC0yNS42OF0sIFsxNDQuNDksIC0yNS42NF0sIFsxNDQsIC0yNS45OV0sIFsxNDQuMTgsIC0yNi4zOV1cbiAqICAgICAgICAgICAgXVxuICogICAgICAgICAgXVxuICogICAgICAgIH1cbiAqICAgICAgfVxuICogICAgXVxuICogIH07XG4gKiB9XG4gKiBgYGBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnYWdtLWRhdGEtbGF5ZXInLFxufSlcbmV4cG9ydCBjbGFzcyBBZ21EYXRhTGF5ZXIgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBzdGF0aWMgX2RhdGFPcHRpb25zQXR0cmlidXRlcyA9IFsnc3R5bGUnXTtcblxuICBwcml2YXRlIF9hZGRlZFRvTWFuYWdlciA9IGZhbHNlO1xuICBwcml2YXRlIF9pZDogc3RyaW5nID0gKGxheWVySWQrKykudG9TdHJpbmcoKTtcbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIGEgZmVhdHVyZSBpbiB0aGUgbGF5ZXIgaXMgY2xpY2tlZC5cbiAgICovXG4gIEBPdXRwdXQoKSBsYXllckNsaWNrOiBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuRGF0YS5Nb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuRGF0YS5Nb3VzZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBUaGUgZ2VvSnNvbiB0byBiZSBkaXNwbGF5ZWRcbiAgICovXG4gIEBJbnB1dCgpIGdlb0pzb246IG9iamVjdCB8IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBUaGUgbGF5ZXIncyBzdHlsZSBmdW5jdGlvbi5cbiAgICovXG4gIEBJbnB1dCgpIHN0eWxlOiAocGFyYW06IGdvb2dsZS5tYXBzLkRhdGEuRmVhdHVyZSkgPT4gZ29vZ2xlLm1hcHMuRGF0YS5TdHlsZU9wdGlvbnM7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbWFuYWdlcjogRGF0YUxheWVyTWFuYWdlcikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuX2FkZGVkVG9NYW5hZ2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX21hbmFnZXIuYWRkRGF0YUxheWVyKHRoaXMpO1xuICAgIHRoaXMuX2FkZGVkVG9NYW5hZ2VyID0gdHJ1ZTtcbiAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgbGlzdGVuZXJzID0gW1xuICAgICAgeyBuYW1lOiAnY2xpY2snLCBoYW5kbGVyOiAoZXY6IGdvb2dsZS5tYXBzLkRhdGEuTW91c2VFdmVudCkgPT4gdGhpcy5sYXllckNsaWNrLmVtaXQoZXYpIH0sXG4gICAgXTtcbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgob2JqKSA9PiB7XG4gICAgICBjb25zdCBvcyA9IHRoaXMuX21hbmFnZXIuY3JlYXRlRXZlbnRPYnNlcnZhYmxlKG9iai5uYW1lLCB0aGlzKS5zdWJzY3JpYmUob2JqLmhhbmRsZXIpO1xuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKG9zKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgaWQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX2lkOyB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICB0b1N0cmluZygpOiBzdHJpbmcgeyByZXR1cm4gYEFnbURhdGFMYXllci0ke3RoaXMuX2lkLnRvU3RyaW5nKCl9YDsgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fbWFuYWdlci5kZWxldGVEYXRhTGF5ZXIodGhpcyk7XG4gICAgLy8gdW5zdWJzY3JpYmUgYWxsIHJlZ2lzdGVyZWQgb2JzZXJ2YWJsZSBzdWJzY3JpcHRpb25zXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHMgPT4gcy51bnN1YnNjcmliZSgpKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICghdGhpcy5fYWRkZWRUb01hbmFnZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXN0cmluZy1saXRlcmFsXG4gICAgY29uc3QgZ2VvSnNvbkNoYW5nZSA9IGNoYW5nZXNbJ2dlb0pzb24nXTtcbiAgICBpZiAoZ2VvSnNvbkNoYW5nZSkge1xuICAgICAgdGhpcy5fbWFuYWdlci51cGRhdGVHZW9Kc29uKHRoaXMsIGdlb0pzb25DaGFuZ2UuY3VycmVudFZhbHVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhT3B0aW9ucyA9IEFnbURhdGFMYXllci5fZGF0YU9wdGlvbnNBdHRyaWJ1dGVzLnJlZHVjZTxnb29nbGUubWFwcy5EYXRhLkRhdGFPcHRpb25zPigob3B0aW9ucywgaykgPT5cbiAgICAgIG9wdGlvbnNba10gPSBjaGFuZ2VzLmhhc093blByb3BlcnR5KGspID8gY2hhbmdlc1trXS5jdXJyZW50VmFsdWUgOiAodGhpcyBhcyBhbnkpW2tdLCB7fSk7XG5cbiAgICB0aGlzLl9tYW5hZ2VyLnNldERhdGFPcHRpb25zKHRoaXMsIGRhdGFPcHRpb25zKTtcbiAgfVxufVxuIl19