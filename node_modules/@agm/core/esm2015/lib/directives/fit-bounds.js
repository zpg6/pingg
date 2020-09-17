import { Directive, Input, Self } from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { FitBoundsAccessor, FitBoundsService } from '../services/fit-bounds';
/**
 * Adds the given directive to the auto fit bounds feature when the value is true.
 * To make it work with you custom AGM component, you also have to implement the {@link FitBoundsAccessor} abstract class.
 * @example
 * <agm-marker [agmFitBounds]="true"></agm-marker>
 */
export class AgmFitBounds {
    constructor(_fitBoundsAccessor, _fitBoundsService) {
        this._fitBoundsAccessor = _fitBoundsAccessor;
        this._fitBoundsService = _fitBoundsService;
        /**
         * If the value is true, the element gets added to the bounds of the map.
         * Default: true.
         */
        this.agmFitBounds = true;
        this._destroyed$ = new Subject();
        this._latestFitBoundsDetails = null;
    }
    /**
     * @internal
     */
    ngOnChanges() {
        this._updateBounds();
    }
    /**
     * @internal
     */
    ngOnInit() {
        this._fitBoundsAccessor
            .getFitBoundsDetails$()
            .pipe(distinctUntilChanged((x, y) => x.latLng.lat === y.latLng.lat && x.latLng.lng === y.latLng.lng), takeUntil(this._destroyed$))
            .subscribe(details => this._updateBounds(details));
    }
    /*
     Either the location changed, or visible status changed.
     Possible state changes are
     invisible -> visible
     visible -> invisible
     visible -> visible (new location)
    */
    _updateBounds(newFitBoundsDetails) {
        // either visibility will change, or location, so remove the old one anyway
        if (this._latestFitBoundsDetails) {
            this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng);
            // don't set latestFitBoundsDetails to null, because we can toggle visibility from
            // true -> false -> true, in which case we still need old value cached here
        }
        if (newFitBoundsDetails) {
            this._latestFitBoundsDetails = newFitBoundsDetails;
        }
        if (!this._latestFitBoundsDetails) {
            return;
        }
        if (this.agmFitBounds === true) {
            this._fitBoundsService.addToBounds(this._latestFitBoundsDetails.latLng);
        }
    }
    /**
     * @internal
     */
    ngOnDestroy() {
        this._destroyed$.next();
        this._destroyed$.complete();
        if (this._latestFitBoundsDetails !== null) {
            this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng);
        }
    }
}
AgmFitBounds.decorators = [
    { type: Directive, args: [{
                selector: '[agmFitBounds]',
            },] }
];
AgmFitBounds.ctorParameters = () => [
    { type: FitBoundsAccessor, decorators: [{ type: Self }] },
    { type: FitBoundsService }
];
AgmFitBounds.propDecorators = {
    agmFitBounds: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZml0LWJvdW5kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi9kaXJlY3RpdmVzL2ZpdC1ib3VuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWdDLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRSxPQUFPLEVBQUUsaUJBQWlCLEVBQW9CLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFL0Y7Ozs7O0dBS0c7QUFJSCxNQUFNLE9BQU8sWUFBWTtJQVV2QixZQUMyQixrQkFBcUMsRUFDN0MsaUJBQW1DO1FBRDNCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDN0Msc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQVh0RDs7O1dBR0c7UUFDTSxpQkFBWSxHQUFHLElBQUksQ0FBQztRQUVyQixnQkFBVyxHQUFrQixJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQ2pELDRCQUF1QixHQUE0QixJQUFJLENBQUM7SUFLN0QsQ0FBQztJQUVKOztPQUVHO0lBQ0gsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sSUFBSSxDQUFDLGtCQUFrQjthQUNwQixvQkFBb0IsRUFBRTthQUN0QixJQUFJLENBQ0gsb0JBQW9CLENBQ2xCLENBQUMsQ0FBbUIsRUFBRSxDQUFtQixFQUFFLEVBQUUsQ0FDM0MsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQ2pFLEVBQ0QsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FDNUI7YUFDQSxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVEOzs7Ozs7TUFNRTtJQUNNLGFBQWEsQ0FBQyxtQkFBc0M7UUFDMUQsMkVBQTJFO1FBQzNFLElBQUksSUFBSSxDQUFDLHVCQUF1QixFQUFFO1lBQ2hDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0Usa0ZBQWtGO1lBQ2xGLDJFQUEyRTtTQUM1RTtRQUVELElBQUksbUJBQW1CLEVBQUU7WUFDdkIsSUFBSSxDQUFDLHVCQUF1QixHQUFHLG1CQUFtQixDQUFDO1NBQ3BEO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtZQUNqQyxPQUFPO1NBQ1I7UUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssSUFBSSxFQUFFO1lBQzlCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3pFO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsV0FBVztRQUNULElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyx1QkFBdUIsS0FBSyxJQUFJLEVBQUU7WUFDekMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM5RTtJQUNILENBQUM7OztZQTVFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjthQUMzQjs7O1lBVlEsaUJBQWlCLHVCQXNCckIsSUFBSTtZQXRCcUMsZ0JBQWdCOzs7MkJBZ0IzRCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRml0Qm91bmRzQWNjZXNzb3IsIEZpdEJvdW5kc0RldGFpbHMsIEZpdEJvdW5kc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9maXQtYm91bmRzJztcblxuLyoqXG4gKiBBZGRzIHRoZSBnaXZlbiBkaXJlY3RpdmUgdG8gdGhlIGF1dG8gZml0IGJvdW5kcyBmZWF0dXJlIHdoZW4gdGhlIHZhbHVlIGlzIHRydWUuXG4gKiBUbyBtYWtlIGl0IHdvcmsgd2l0aCB5b3UgY3VzdG9tIEFHTSBjb21wb25lbnQsIHlvdSBhbHNvIGhhdmUgdG8gaW1wbGVtZW50IHRoZSB7QGxpbmsgRml0Qm91bmRzQWNjZXNzb3J9IGFic3RyYWN0IGNsYXNzLlxuICogQGV4YW1wbGVcbiAqIDxhZ20tbWFya2VyIFthZ21GaXRCb3VuZHNdPVwidHJ1ZVwiPjwvYWdtLW1hcmtlcj5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FnbUZpdEJvdW5kc10nLFxufSlcbmV4cG9ydCBjbGFzcyBBZ21GaXRCb3VuZHMgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgLyoqXG4gICAqIElmIHRoZSB2YWx1ZSBpcyB0cnVlLCB0aGUgZWxlbWVudCBnZXRzIGFkZGVkIHRvIHRoZSBib3VuZHMgb2YgdGhlIG1hcC5cbiAgICogRGVmYXVsdDogdHJ1ZS5cbiAgICovXG4gIEBJbnB1dCgpIGFnbUZpdEJvdW5kcyA9IHRydWU7XG5cbiAgcHJpdmF0ZSBfZGVzdHJveWVkJDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgX2xhdGVzdEZpdEJvdW5kc0RldGFpbHM6IEZpdEJvdW5kc0RldGFpbHMgfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAU2VsZigpIHByaXZhdGUgcmVhZG9ubHkgX2ZpdEJvdW5kc0FjY2Vzc29yOiBGaXRCb3VuZHNBY2Nlc3NvcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9maXRCb3VuZHNTZXJ2aWNlOiBGaXRCb3VuZHNTZXJ2aWNlLFxuICApIHt9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5fdXBkYXRlQm91bmRzKCk7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9maXRCb3VuZHNBY2Nlc3NvclxuICAgICAgLmdldEZpdEJvdW5kc0RldGFpbHMkKClcbiAgICAgIC5waXBlKFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZChcbiAgICAgICAgICAoeDogRml0Qm91bmRzRGV0YWlscywgeTogRml0Qm91bmRzRGV0YWlscykgPT5cbiAgICAgICAgICAgIHgubGF0TG5nLmxhdCA9PT0geS5sYXRMbmcubGF0ICYmIHgubGF0TG5nLmxuZyA9PT0geS5sYXRMbmcubG5nLFxuICAgICAgICApLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveWVkJCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKGRldGFpbHMgPT4gdGhpcy5fdXBkYXRlQm91bmRzKGRldGFpbHMpKTtcbiAgfVxuXG4gIC8qXG4gICBFaXRoZXIgdGhlIGxvY2F0aW9uIGNoYW5nZWQsIG9yIHZpc2libGUgc3RhdHVzIGNoYW5nZWQuXG4gICBQb3NzaWJsZSBzdGF0ZSBjaGFuZ2VzIGFyZVxuICAgaW52aXNpYmxlIC0+IHZpc2libGVcbiAgIHZpc2libGUgLT4gaW52aXNpYmxlXG4gICB2aXNpYmxlIC0+IHZpc2libGUgKG5ldyBsb2NhdGlvbilcbiAgKi9cbiAgcHJpdmF0ZSBfdXBkYXRlQm91bmRzKG5ld0ZpdEJvdW5kc0RldGFpbHM/OiBGaXRCb3VuZHNEZXRhaWxzKSB7XG4gICAgLy8gZWl0aGVyIHZpc2liaWxpdHkgd2lsbCBjaGFuZ2UsIG9yIGxvY2F0aW9uLCBzbyByZW1vdmUgdGhlIG9sZCBvbmUgYW55d2F5XG4gICAgaWYgKHRoaXMuX2xhdGVzdEZpdEJvdW5kc0RldGFpbHMpIHtcbiAgICAgIHRoaXMuX2ZpdEJvdW5kc1NlcnZpY2UucmVtb3ZlRnJvbUJvdW5kcyh0aGlzLl9sYXRlc3RGaXRCb3VuZHNEZXRhaWxzLmxhdExuZyk7XG4gICAgICAvLyBkb24ndCBzZXQgbGF0ZXN0Rml0Qm91bmRzRGV0YWlscyB0byBudWxsLCBiZWNhdXNlIHdlIGNhbiB0b2dnbGUgdmlzaWJpbGl0eSBmcm9tXG4gICAgICAvLyB0cnVlIC0+IGZhbHNlIC0+IHRydWUsIGluIHdoaWNoIGNhc2Ugd2Ugc3RpbGwgbmVlZCBvbGQgdmFsdWUgY2FjaGVkIGhlcmVcbiAgICB9XG5cbiAgICBpZiAobmV3Rml0Qm91bmRzRGV0YWlscykge1xuICAgICAgdGhpcy5fbGF0ZXN0Rml0Qm91bmRzRGV0YWlscyA9IG5ld0ZpdEJvdW5kc0RldGFpbHM7XG4gICAgfVxuICAgIGlmICghdGhpcy5fbGF0ZXN0Rml0Qm91bmRzRGV0YWlscykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5hZ21GaXRCb3VuZHMgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuX2ZpdEJvdW5kc1NlcnZpY2UuYWRkVG9Cb3VuZHModGhpcy5fbGF0ZXN0Rml0Qm91bmRzRGV0YWlscy5sYXRMbmcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2Rlc3Ryb3llZCQubmV4dCgpO1xuICAgIHRoaXMuX2Rlc3Ryb3llZCQuY29tcGxldGUoKTtcbiAgICBpZiAodGhpcy5fbGF0ZXN0Rml0Qm91bmRzRGV0YWlscyAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fZml0Qm91bmRzU2VydmljZS5yZW1vdmVGcm9tQm91bmRzKHRoaXMuX2xhdGVzdEZpdEJvdW5kc0RldGFpbHMubGF0TG5nKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==