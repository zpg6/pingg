import { Directive, EventEmitter, Input, Output, } from '@angular/core';
import { RectangleManager } from '../services/managers/rectangle-manager';
export class AgmRectangle {
    constructor(_manager) {
        this._manager = _manager;
        /**
         * Indicates whether this Rectangle handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this rectangle over the map. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
         * If set to true, the user can edit this rectangle by dragging the control points shown at
         * the center and around the circumference of the rectangle. Defaults to false.
         */
        this.editable = false;
        /**
         * The stroke position. Defaults to CENTER.
         * This property is not supported on Internet Explorer 8 and earlier.
         */
        this.strokePosition = 'CENTER';
        /**
         * The stroke width in pixels.
         */
        this.strokeWeight = 0;
        /**
         * Whether this rectangle is visible on the map. Defaults to true.
         */
        this.visible = true;
        /**
         * This event is fired when the rectangle's is changed.
         */
        this.boundsChange = new EventEmitter();
        /**
         * This event emitter gets emitted when the user clicks on the rectangle.
         */
        this.rectangleClick = new EventEmitter();
        /**
         * This event emitter gets emitted when the user clicks on the rectangle.
         */
        this.rectangleDblClick = new EventEmitter();
        /**
         * This event is repeatedly fired while the user drags the rectangle.
         */
        // tslint:disable-next-line: no-output-native
        this.drag = new EventEmitter();
        /**
         * This event is fired when the user stops dragging the rectangle.
         */
        this.dragEnd = new EventEmitter();
        /**
         * This event is fired when the user starts dragging the rectangle.
         */
        this.dragStart = new EventEmitter();
        /**
         * This event is fired when the DOM mousedown event is fired on the rectangle.
         */
        this.mouseDown = new EventEmitter();
        /**
         * This event is fired when the DOM mousemove event is fired on the rectangle.
         */
        this.mouseMove = new EventEmitter();
        /**
         * This event is fired on rectangle mouseout.
         */
        this.mouseOut = new EventEmitter();
        /**
         * This event is fired on rectangle mouseover.
         */
        this.mouseOver = new EventEmitter();
        /**
         * This event is fired when the DOM mouseup event is fired on the rectangle.
         */
        this.mouseUp = new EventEmitter();
        /**
         * This event is fired when the rectangle is right-clicked on.
         */
        this.rightClick = new EventEmitter();
        this._rectangleAddedToManager = false;
        this._eventSubscriptions = [];
    }
    /** @internal */
    ngOnInit() {
        this._manager.addRectangle(this);
        this._rectangleAddedToManager = true;
        this._registerEventListeners();
    }
    /** @internal */
    ngOnChanges(changes) {
        if (!this._rectangleAddedToManager) {
            return;
        }
        // tslint:disable: no-string-literal
        if (changes['north'] ||
            changes['east'] ||
            changes['south'] ||
            changes['west']) {
            this._manager.setBounds(this);
        }
        if (changes['editable']) {
            this._manager.setEditable(this);
        }
        if (changes['draggable']) {
            this._manager.setDraggable(this);
        }
        if (changes['visible']) {
            this._manager.setVisible(this);
        }
        // tslint:enable: no-string-literal
        this._updateRectangleOptionsChanges(changes);
    }
    _updateRectangleOptionsChanges(changes) {
        const options = {};
        const optionKeys = Object.keys(changes).filter(k => AgmRectangle._mapOptions.indexOf(k) !== -1);
        optionKeys.forEach(k => {
            options[k] = changes[k].currentValue;
        });
        if (optionKeys.length > 0) {
            this._manager.setOptions(this, options);
        }
    }
    _registerEventListeners() {
        const events = new Map();
        events.set('bounds_changed', this.boundsChange);
        events.set('click', this.rectangleClick);
        events.set('dblclick', this.rectangleDblClick);
        events.set('drag', this.drag);
        events.set('dragend', this.dragEnd);
        events.set('dragStart', this.dragStart);
        events.set('mousedown', this.mouseDown);
        events.set('mousemove', this.mouseMove);
        events.set('mouseout', this.mouseOut);
        events.set('mouseover', this.mouseOver);
        events.set('mouseup', this.mouseUp);
        events.set('rightclick', this.rightClick);
        events.forEach((eventEmitter, eventName) => {
            this._eventSubscriptions.push(this._manager
                .createEventObservable(eventName, this)
                .subscribe(value => {
                switch (eventName) {
                    case 'bounds_changed':
                        this._manager.getBounds(this).then(bounds => eventEmitter.emit({
                            north: bounds.getNorthEast().lat(),
                            east: bounds.getNorthEast().lng(),
                            south: bounds.getSouthWest().lat(),
                            west: bounds.getSouthWest().lng(),
                        }));
                        break;
                    default:
                        eventEmitter.emit(value);
                }
            }));
        });
    }
    /** @internal */
    ngOnDestroy() {
        this._eventSubscriptions.forEach(s => s.unsubscribe());
        this._eventSubscriptions = null;
        this._manager.removeRectangle(this);
    }
    /**
     * Gets the LatLngBounds of this Rectangle.
     */
    getBounds() {
        return this._manager.getBounds(this);
    }
}
AgmRectangle._mapOptions = [
    'fillColor',
    'fillOpacity',
    'strokeColor',
    'strokeOpacity',
    'strokePosition',
    'strokeWeight',
    'visible',
    'zIndex',
    'clickable',
];
AgmRectangle.decorators = [
    { type: Directive, args: [{
                selector: 'agm-rectangle',
            },] }
];
AgmRectangle.ctorParameters = () => [
    { type: RectangleManager }
];
AgmRectangle.propDecorators = {
    north: [{ type: Input }],
    east: [{ type: Input }],
    south: [{ type: Input }],
    west: [{ type: Input }],
    clickable: [{ type: Input }],
    draggable: [{ type: Input, args: ['rectangleDraggable',] }],
    editable: [{ type: Input }],
    fillColor: [{ type: Input }],
    fillOpacity: [{ type: Input }],
    strokeColor: [{ type: Input }],
    strokeOpacity: [{ type: Input }],
    strokePosition: [{ type: Input }],
    strokeWeight: [{ type: Input }],
    visible: [{ type: Input }],
    zIndex: [{ type: Input }],
    boundsChange: [{ type: Output }],
    rectangleClick: [{ type: Output }],
    rectangleDblClick: [{ type: Output }],
    drag: [{ type: Output }],
    dragEnd: [{ type: Output }],
    dragStart: [{ type: Output }],
    mouseDown: [{ type: Output }],
    mouseMove: [{ type: Output }],
    mouseOut: [{ type: Output }],
    mouseOver: [{ type: Output }],
    mouseUp: [{ type: Output }],
    rightClick: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjdGFuZ2xlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL2RpcmVjdGl2ZXMvcmVjdGFuZ2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEdBRVAsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFLMUUsTUFBTSxPQUFPLFlBQVk7SUFzS3ZCLFlBQW9CLFFBQTBCO1FBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO1FBako5Qzs7V0FFRztRQUNNLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFFMUI7O1dBRUc7UUFDSCwyQ0FBMkM7UUFDZCxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRS9DOzs7V0FHRztRQUNNLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFzQjFCOzs7V0FHRztRQUNNLG1CQUFjLEdBQTRDLFFBQVEsQ0FBQztRQUU1RTs7V0FFRztRQUNNLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBRTFCOztXQUVHO1FBQ00sWUFBTyxHQUFHLElBQUksQ0FBQztRQU94Qjs7V0FFRztRQUVILGlCQUFZLEdBQWtELElBQUksWUFBWSxFQUUzRSxDQUFDO1FBRUo7O1dBRUc7UUFFSCxtQkFBYyxHQUF5QyxJQUFJLFlBQVksRUFBMEIsQ0FBQztRQUVsRzs7V0FFRztRQUVILHNCQUFpQixHQUF5QyxJQUFJLFlBQVksRUFBMEIsQ0FBQztRQUVyRzs7V0FFRztRQUNILDZDQUE2QztRQUNuQyxTQUFJLEdBQXlDLElBQUksWUFBWSxFQUEwQixDQUFDO1FBRWxHOztXQUVHO1FBQ08sWUFBTyxHQUF5QyxJQUFJLFlBQVksRUFBMEIsQ0FBQztRQUVyRzs7V0FFRztRQUVILGNBQVMsR0FBeUMsSUFBSSxZQUFZLEVBQTBCLENBQUM7UUFFN0Y7O1dBRUc7UUFFSCxj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TCxLQUFLOzBCQUtMLEtBQUs7MEJBS0wsS0FBSzs0QkFLTCxLQUFLOzZCQU1MLEtBQUs7MkJBS0wsS0FBSztzQkFLTCxLQUFLO3FCQUtMLEtBQUs7MkJBS0wsTUFBTTs2QkFRTixNQUFNO2dDQU1OLE1BQU07bUJBT04sTUFBTTtzQkFLTixNQUFNO3dCQUtOLE1BQU07d0JBTU4sTUFBTTt3QkFNTixNQUFNO3VCQU1OLE1BQU07d0JBS04sTUFBTTtzQkFNTixNQUFNO3lCQUtOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUmVjdGFuZ2xlTWFuYWdlciB9IGZyb20gJy4uL3NlcnZpY2VzL21hbmFnZXJzL3JlY3RhbmdsZS1tYW5hZ2VyJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnYWdtLXJlY3RhbmdsZScsXG59KVxuZXhwb3J0IGNsYXNzIEFnbVJlY3RhbmdsZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogVGhlIG5vcnRoIHBvc2l0aW9uIG9mIHRoZSByZWN0YW5nbGUgKHJlcXVpcmVkKS5cbiAgICovXG4gIEBJbnB1dCgpIG5vcnRoOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBlYXN0IHBvc2l0aW9uIG9mIHRoZSByZWN0YW5nbGUgKHJlcXVpcmVkKS5cbiAgICovXG4gIEBJbnB1dCgpIGVhc3Q6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIHNvdXRoIHBvc2l0aW9uIG9mIHRoZSByZWN0YW5nbGUgKHJlcXVpcmVkKS5cbiAgICovXG4gIEBJbnB1dCgpIHNvdXRoOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSB3ZXN0IHBvc2l0aW9uIG9mIHRoZSByZWN0YW5nbGUgKHJlcXVpcmVkKS5cbiAgICovXG4gIEBJbnB1dCgpIHdlc3Q6IG51bWJlcjtcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhpcyBSZWN0YW5nbGUgaGFuZGxlcyBtb3VzZSBldmVudHMuIERlZmF1bHRzIHRvIHRydWUuXG4gICAqL1xuICBASW5wdXQoKSBjbGlja2FibGUgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBJZiBzZXQgdG8gdHJ1ZSwgdGhlIHVzZXIgY2FuIGRyYWcgdGhpcyByZWN0YW5nbGUgb3ZlciB0aGUgbWFwLiBEZWZhdWx0cyB0byBmYWxzZS5cbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCdyZWN0YW5nbGVEcmFnZ2FibGUnKSBkcmFnZ2FibGUgPSBmYWxzZTtcblxuICAvKipcbiAgICogSWYgc2V0IHRvIHRydWUsIHRoZSB1c2VyIGNhbiBlZGl0IHRoaXMgcmVjdGFuZ2xlIGJ5IGRyYWdnaW5nIHRoZSBjb250cm9sIHBvaW50cyBzaG93biBhdFxuICAgKiB0aGUgY2VudGVyIGFuZCBhcm91bmQgdGhlIGNpcmN1bWZlcmVuY2Ugb2YgdGhlIHJlY3RhbmdsZS4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAqL1xuICBASW5wdXQoKSBlZGl0YWJsZSA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUaGUgZmlsbCBjb2xvci4gQWxsIENTUzMgY29sb3JzIGFyZSBzdXBwb3J0ZWQgZXhjZXB0IGZvciBleHRlbmRlZCBuYW1lZCBjb2xvcnMuXG4gICAqL1xuICBASW5wdXQoKSBmaWxsQ29sb3I6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGZpbGwgb3BhY2l0eSBiZXR3ZWVuIDAuMCBhbmQgMS4wLlxuICAgKi9cbiAgQElucHV0KCkgZmlsbE9wYWNpdHk6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIHN0cm9rZSBjb2xvci4gQWxsIENTUzMgY29sb3JzIGFyZSBzdXBwb3J0ZWQgZXhjZXB0IGZvciBleHRlbmRlZCBuYW1lZCBjb2xvcnMuXG4gICAqL1xuICBASW5wdXQoKSBzdHJva2VDb2xvcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgc3Ryb2tlIG9wYWNpdHkgYmV0d2VlbiAwLjAgYW5kIDEuMFxuICAgKi9cbiAgQElucHV0KCkgc3Ryb2tlT3BhY2l0eTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgc3Ryb2tlIHBvc2l0aW9uLiBEZWZhdWx0cyB0byBDRU5URVIuXG4gICAqIFRoaXMgcHJvcGVydHkgaXMgbm90IHN1cHBvcnRlZCBvbiBJbnRlcm5ldCBFeHBsb3JlciA4IGFuZCBlYXJsaWVyLlxuICAgKi9cbiAgQElucHV0KCkgc3Ryb2tlUG9zaXRpb246IGtleW9mIHR5cGVvZiBnb29nbGUubWFwcy5TdHJva2VQb3NpdGlvbiA9ICdDRU5URVInO1xuXG4gIC8qKlxuICAgKiBUaGUgc3Ryb2tlIHdpZHRoIGluIHBpeGVscy5cbiAgICovXG4gIEBJbnB1dCgpIHN0cm9rZVdlaWdodCA9IDA7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhpcyByZWN0YW5nbGUgaXMgdmlzaWJsZSBvbiB0aGUgbWFwLiBEZWZhdWx0cyB0byB0cnVlLlxuICAgKi9cbiAgQElucHV0KCkgdmlzaWJsZSA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFRoZSB6SW5kZXggY29tcGFyZWQgdG8gb3RoZXIgcG9seXMuXG4gICAqL1xuICBASW5wdXQoKSB6SW5kZXg6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSByZWN0YW5nbGUncyBpcyBjaGFuZ2VkLlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGJvdW5kc0NoYW5nZTogRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kc0xpdGVyYWw+ID0gbmV3IEV2ZW50RW1pdHRlcjxcbiAgICBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHNMaXRlcmFsXG4gID4oKTtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBlbWl0dGVyIGdldHMgZW1pdHRlZCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgcmVjdGFuZ2xlLlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHJlY3RhbmdsZUNsaWNrOiBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgZW1pdHRlciBnZXRzIGVtaXR0ZWQgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIHJlY3RhbmdsZS5cbiAgICovXG4gIEBPdXRwdXQoKVxuICByZWN0YW5nbGVEYmxDbGljazogRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIHJlcGVhdGVkbHkgZmlyZWQgd2hpbGUgdGhlIHVzZXIgZHJhZ3MgdGhlIHJlY3RhbmdsZS5cbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tb3V0cHV0LW5hdGl2ZVxuICBAT3V0cHV0KCkgZHJhZzogRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHVzZXIgc3RvcHMgZHJhZ2dpbmcgdGhlIHJlY3RhbmdsZS5cbiAgICovXG4gIEBPdXRwdXQoKSBkcmFnRW5kOiBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgdXNlciBzdGFydHMgZHJhZ2dpbmcgdGhlIHJlY3RhbmdsZS5cbiAgICovXG4gIEBPdXRwdXQoKVxuICBkcmFnU3RhcnQ6IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTW91c2VFdmVudD4oKTtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBET00gbW91c2Vkb3duIGV2ZW50IGlzIGZpcmVkIG9uIHRoZSByZWN0YW5nbGUuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgbW91c2VEb3duOiBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgRE9NIG1vdXNlbW92ZSBldmVudCBpcyBmaXJlZCBvbiB0aGUgcmVjdGFuZ2xlLlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIG1vdXNlTW92ZTogRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIG9uIHJlY3RhbmdsZSBtb3VzZW91dC5cbiAgICovXG4gIEBPdXRwdXQoKSBtb3VzZU91dDogRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIG9uIHJlY3RhbmdsZSBtb3VzZW92ZXIuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgbW91c2VPdmVyOiBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgRE9NIG1vdXNldXAgZXZlbnQgaXMgZmlyZWQgb24gdGhlIHJlY3RhbmdsZS5cbiAgICovXG4gIEBPdXRwdXQoKSBtb3VzZVVwOiBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgcmVjdGFuZ2xlIGlzIHJpZ2h0LWNsaWNrZWQgb24uXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmlnaHRDbGljazogRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PigpO1xuXG4gIHByaXZhdGUgX3JlY3RhbmdsZUFkZGVkVG9NYW5hZ2VyID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgX21hcE9wdGlvbnM6IHN0cmluZ1tdID0gW1xuICAgICdmaWxsQ29sb3InLFxuICAgICdmaWxsT3BhY2l0eScsXG4gICAgJ3N0cm9rZUNvbG9yJyxcbiAgICAnc3Ryb2tlT3BhY2l0eScsXG4gICAgJ3N0cm9rZVBvc2l0aW9uJyxcbiAgICAnc3Ryb2tlV2VpZ2h0JyxcbiAgICAndmlzaWJsZScsXG4gICAgJ3pJbmRleCcsXG4gICAgJ2NsaWNrYWJsZScsXG4gIF07XG5cbiAgcHJpdmF0ZSBfZXZlbnRTdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX21hbmFnZXI6IFJlY3RhbmdsZU1hbmFnZXIpIHt9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9tYW5hZ2VyLmFkZFJlY3RhbmdsZSh0aGlzKTtcbiAgICB0aGlzLl9yZWN0YW5nbGVBZGRlZFRvTWFuYWdlciA9IHRydWU7XG4gICAgdGhpcy5fcmVnaXN0ZXJFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtrZXk6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9KSB7XG4gICAgaWYgKCF0aGlzLl9yZWN0YW5nbGVBZGRlZFRvTWFuYWdlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZTogbm8tc3RyaW5nLWxpdGVyYWxcbiAgICBpZiAoXG4gICAgICBjaGFuZ2VzWydub3J0aCddIHx8XG4gICAgICBjaGFuZ2VzWydlYXN0J10gfHxcbiAgICAgIGNoYW5nZXNbJ3NvdXRoJ10gfHxcbiAgICAgIGNoYW5nZXNbJ3dlc3QnXVxuICAgICkge1xuICAgICAgdGhpcy5fbWFuYWdlci5zZXRCb3VuZHModGhpcyk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzWydlZGl0YWJsZSddKSB7XG4gICAgICB0aGlzLl9tYW5hZ2VyLnNldEVkaXRhYmxlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlc1snZHJhZ2dhYmxlJ10pIHtcbiAgICAgIHRoaXMuX21hbmFnZXIuc2V0RHJhZ2dhYmxlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlc1sndmlzaWJsZSddKSB7XG4gICAgICB0aGlzLl9tYW5hZ2VyLnNldFZpc2libGUodGhpcyk7XG4gICAgfVxuICAgIC8vIHRzbGludDplbmFibGU6IG5vLXN0cmluZy1saXRlcmFsXG4gICAgdGhpcy5fdXBkYXRlUmVjdGFuZ2xlT3B0aW9uc0NoYW5nZXMoY2hhbmdlcyk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVSZWN0YW5nbGVPcHRpb25zQ2hhbmdlcyhjaGFuZ2VzOiB7XG4gICAgW3Byb3BOYW1lOiBzdHJpbmddOiBTaW1wbGVDaGFuZ2U7XG4gIH0pIHtcbiAgICBjb25zdCBvcHRpb25zOiBnb29nbGUubWFwcy5SZWN0YW5nbGVPcHRpb25zID0ge307XG4gICAgY29uc3Qgb3B0aW9uS2V5cyA9IE9iamVjdC5rZXlzKGNoYW5nZXMpLmZpbHRlcihcbiAgICAgIGsgPT4gQWdtUmVjdGFuZ2xlLl9tYXBPcHRpb25zLmluZGV4T2YoaykgIT09IC0xLFxuICAgICk7XG4gICAgb3B0aW9uS2V5cy5mb3JFYWNoKGsgPT4ge1xuICAgICAgb3B0aW9uc1trXSA9IGNoYW5nZXNba10uY3VycmVudFZhbHVlO1xuICAgIH0pO1xuXG4gICAgaWYgKG9wdGlvbktleXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5fbWFuYWdlci5zZXRPcHRpb25zKHRoaXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3JlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgZXZlbnRzOiBNYXA8c3RyaW5nLCBFdmVudEVtaXR0ZXI8YW55Pj4gPSBuZXcgTWFwPFxuICAgICAgc3RyaW5nLFxuICAgICAgRXZlbnRFbWl0dGVyPGFueT5cbiAgICA+KCk7XG4gICAgZXZlbnRzLnNldCgnYm91bmRzX2NoYW5nZWQnLCB0aGlzLmJvdW5kc0NoYW5nZSk7XG4gICAgZXZlbnRzLnNldCgnY2xpY2snLCB0aGlzLnJlY3RhbmdsZUNsaWNrKTtcbiAgICBldmVudHMuc2V0KCdkYmxjbGljaycsIHRoaXMucmVjdGFuZ2xlRGJsQ2xpY2spO1xuICAgIGV2ZW50cy5zZXQoJ2RyYWcnLCB0aGlzLmRyYWcpO1xuICAgIGV2ZW50cy5zZXQoJ2RyYWdlbmQnLCB0aGlzLmRyYWdFbmQpO1xuICAgIGV2ZW50cy5zZXQoJ2RyYWdTdGFydCcsIHRoaXMuZHJhZ1N0YXJ0KTtcbiAgICBldmVudHMuc2V0KCdtb3VzZWRvd24nLCB0aGlzLm1vdXNlRG93bik7XG4gICAgZXZlbnRzLnNldCgnbW91c2Vtb3ZlJywgdGhpcy5tb3VzZU1vdmUpO1xuICAgIGV2ZW50cy5zZXQoJ21vdXNlb3V0JywgdGhpcy5tb3VzZU91dCk7XG4gICAgZXZlbnRzLnNldCgnbW91c2VvdmVyJywgdGhpcy5tb3VzZU92ZXIpO1xuICAgIGV2ZW50cy5zZXQoJ21vdXNldXAnLCB0aGlzLm1vdXNlVXApO1xuICAgIGV2ZW50cy5zZXQoJ3JpZ2h0Y2xpY2snLCB0aGlzLnJpZ2h0Q2xpY2spO1xuXG4gICAgZXZlbnRzLmZvckVhY2goKGV2ZW50RW1pdHRlciwgZXZlbnROYW1lKSA9PiB7XG4gICAgICB0aGlzLl9ldmVudFN1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgICAgdGhpcy5fbWFuYWdlclxuICAgICAgICAgIC5jcmVhdGVFdmVudE9ic2VydmFibGU8Z29vZ2xlLm1hcHMuTW91c2VFdmVudD4oZXZlbnROYW1lLCB0aGlzKVxuICAgICAgICAgIC5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChldmVudE5hbWUpIHtcbiAgICAgICAgICAgICAgY2FzZSAnYm91bmRzX2NoYW5nZWQnOlxuICAgICAgICAgICAgICAgIHRoaXMuX21hbmFnZXIuZ2V0Qm91bmRzKHRoaXMpLnRoZW4oYm91bmRzID0+XG4gICAgICAgICAgICAgICAgICBldmVudEVtaXR0ZXIuZW1pdCh7XG4gICAgICAgICAgICAgICAgICAgIG5vcnRoOiBib3VuZHMuZ2V0Tm9ydGhFYXN0KCkubGF0KCksXG4gICAgICAgICAgICAgICAgICAgIGVhc3Q6IGJvdW5kcy5nZXROb3J0aEVhc3QoKS5sbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgc291dGg6IGJvdW5kcy5nZXRTb3V0aFdlc3QoKS5sYXQoKSxcbiAgICAgICAgICAgICAgICAgICAgd2VzdDogYm91bmRzLmdldFNvdXRoV2VzdCgpLmxuZygpLFxuICAgICAgICAgICAgICAgICAgfSBhcyBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHNMaXRlcmFsKSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGV2ZW50RW1pdHRlci5lbWl0KHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2V2ZW50U3Vic2NyaXB0aW9ucy5mb3JFYWNoKHMgPT4gcy51bnN1YnNjcmliZSgpKTtcbiAgICB0aGlzLl9ldmVudFN1YnNjcmlwdGlvbnMgPSBudWxsO1xuICAgIHRoaXMuX21hbmFnZXIucmVtb3ZlUmVjdGFuZ2xlKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIExhdExuZ0JvdW5kcyBvZiB0aGlzIFJlY3RhbmdsZS5cbiAgICovXG4gIGdldEJvdW5kcygpOiBQcm9taXNlPGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcz4ge1xuICAgIHJldHVybiB0aGlzLl9tYW5hZ2VyLmdldEJvdW5kcyh0aGlzKTtcbiAgfVxufVxuIl19