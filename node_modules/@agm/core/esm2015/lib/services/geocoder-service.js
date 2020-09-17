import { Injectable } from '@angular/core';
import { bindCallback, Observable, of, ReplaySubject, throwError } from 'rxjs';
import { map, multicast, switchMap } from 'rxjs/operators';
import { MapsAPILoader } from './maps-api-loader/maps-api-loader';
import * as i0 from "@angular/core";
import * as i1 from "./maps-api-loader/maps-api-loader";
export class AgmGeocoder {
    constructor(loader) {
        const connectableGeocoder$ = new Observable(subscriber => {
            loader.load().then(() => subscriber.next());
        })
            .pipe(map(() => this._createGeocoder()), multicast(new ReplaySubject(1)));
        connectableGeocoder$.connect(); // ignore the subscription
        // since we will remain subscribed till application exits
        this.geocoder$ = connectableGeocoder$;
    }
    geocode(request) {
        return this.geocoder$.pipe(switchMap((geocoder) => this._getGoogleResults(geocoder, request)));
    }
    _getGoogleResults(geocoder, request) {
        const geocodeObservable = bindCallback(geocoder.geocode);
        return geocodeObservable(request).pipe(switchMap(([results, status]) => {
            if (status === google.maps.GeocoderStatus.OK) {
                return of(results);
            }
            return throwError(status);
        }));
    }
    _createGeocoder() {
        return new google.maps.Geocoder();
    }
}
AgmGeocoder.ɵprov = i0.ɵɵdefineInjectable({ factory: function AgmGeocoder_Factory() { return new AgmGeocoder(i0.ɵɵinject(i1.MapsAPILoader)); }, token: AgmGeocoder, providedIn: "root" });
AgmGeocoder.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
AgmGeocoder.ctorParameters = () => [
    { type: MapsAPILoader }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvY29kZXItc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi9zZXJ2aWNlcy9nZW9jb2Rlci1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBeUIsVUFBVSxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7O0FBR2xFLE1BQU0sT0FBTyxXQUFXO0lBR3RCLFlBQVksTUFBcUI7UUFDL0IsTUFBTSxvQkFBb0IsR0FBRyxJQUFJLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN2RCxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQzthQUNDLElBQUksQ0FDSCxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLEVBQ2pDLFNBQVMsQ0FBQyxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUNlLENBQUM7UUFFbkQsb0JBQW9CLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQywwQkFBMEI7UUFDMUQseURBQXlEO1FBRXpELElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQW9CLENBQUM7SUFDeEMsQ0FBQztJQUVELE9BQU8sQ0FBQyxPQUFvQztRQUMxQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUN4QixTQUFTLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FDbkUsQ0FBQztJQUNKLENBQUM7SUFFTyxpQkFBaUIsQ0FBQyxRQUE4QixFQUFFLE9BQW9DO1FBRTVGLE1BQU0saUJBQWlCLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6RCxPQUFPLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDcEMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRTtZQUM5QixJQUFJLE1BQU0sS0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUU7Z0JBQzVDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3BCO1lBRUQsT0FBTyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFTyxlQUFlO1FBQ3JCLE9BQU8sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BDLENBQUM7Ozs7WUF6Q0YsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7O1lBRnpCLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBiaW5kQ2FsbGJhY2ssIENvbm5lY3RhYmxlT2JzZXJ2YWJsZSwgT2JzZXJ2YWJsZSwgb2YsIFJlcGxheVN1YmplY3QsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgbXVsdGljYXN0LCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBNYXBzQVBJTG9hZGVyIH0gZnJvbSAnLi9tYXBzLWFwaS1sb2FkZXIvbWFwcy1hcGktbG9hZGVyJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBBZ21HZW9jb2RlciB7XG4gIHByb3RlY3RlZCByZWFkb25seSBnZW9jb2RlciQ6IE9ic2VydmFibGU8Z29vZ2xlLm1hcHMuR2VvY29kZXI+O1xuXG4gIGNvbnN0cnVjdG9yKGxvYWRlcjogTWFwc0FQSUxvYWRlcikge1xuICAgIGNvbnN0IGNvbm5lY3RhYmxlR2VvY29kZXIkID0gbmV3IE9ic2VydmFibGUoc3Vic2NyaWJlciA9PiB7XG4gICAgICBsb2FkZXIubG9hZCgpLnRoZW4oKCkgPT4gc3Vic2NyaWJlci5uZXh0KCkpO1xuICAgIH0pXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKCgpID0+IHRoaXMuX2NyZWF0ZUdlb2NvZGVyKCkpLFxuICAgICAgICBtdWx0aWNhc3QobmV3IFJlcGxheVN1YmplY3QoMSkpLFxuICAgICAgKSBhcyBDb25uZWN0YWJsZU9ic2VydmFibGU8Z29vZ2xlLm1hcHMuR2VvY29kZXI+O1xuXG4gICAgY29ubmVjdGFibGVHZW9jb2RlciQuY29ubmVjdCgpOyAvLyBpZ25vcmUgdGhlIHN1YnNjcmlwdGlvblxuICAgIC8vIHNpbmNlIHdlIHdpbGwgcmVtYWluIHN1YnNjcmliZWQgdGlsbCBhcHBsaWNhdGlvbiBleGl0c1xuXG4gICAgdGhpcy5nZW9jb2RlciQgPSBjb25uZWN0YWJsZUdlb2NvZGVyJDtcbiAgfVxuXG4gIGdlb2NvZGUocmVxdWVzdDogZ29vZ2xlLm1hcHMuR2VvY29kZXJSZXF1ZXN0KTogT2JzZXJ2YWJsZTxnb29nbGUubWFwcy5HZW9jb2RlclJlc3VsdFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2VvY29kZXIkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKGdlb2NvZGVyKSA9PiB0aGlzLl9nZXRHb29nbGVSZXN1bHRzKGdlb2NvZGVyLCByZXF1ZXN0KSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0R29vZ2xlUmVzdWx0cyhnZW9jb2RlcjogZ29vZ2xlLm1hcHMuR2VvY29kZXIsIHJlcXVlc3Q6IGdvb2dsZS5tYXBzLkdlb2NvZGVyUmVxdWVzdCk6XG4gICAgICAgT2JzZXJ2YWJsZTxnb29nbGUubWFwcy5HZW9jb2RlclJlc3VsdFtdPiB7XG4gICAgY29uc3QgZ2VvY29kZU9ic2VydmFibGUgPSBiaW5kQ2FsbGJhY2soZ2VvY29kZXIuZ2VvY29kZSk7XG4gICAgcmV0dXJuIGdlb2NvZGVPYnNlcnZhYmxlKHJlcXVlc3QpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKFtyZXN1bHRzLCBzdGF0dXNdKSA9PiB7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IGdvb2dsZS5tYXBzLkdlb2NvZGVyU3RhdHVzLk9LKSB7XG4gICAgICAgICAgcmV0dXJuIG9mKHJlc3VsdHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3Ioc3RhdHVzKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUdlb2NvZGVyKCkge1xuICAgIHJldHVybiBuZXcgZ29vZ2xlLm1hcHMuR2VvY29kZXIoKTtcbiAgfVxufVxuIl19