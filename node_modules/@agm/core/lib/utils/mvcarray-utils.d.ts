/// <reference types="googlemaps" />
import { Observable } from 'rxjs';
export declare function createMVCEventObservable<T>(array: google.maps.MVCArray<T>): Observable<MVCEvent<T>>;
export declare type MvcEventType = 'insert_at' | 'remove_at' | 'set_at';
export interface MVCEvent<T> {
    newArr: T[];
    eventName: MvcEventType;
    index: number;
    previous?: T;
}
export declare class MvcArrayMock<T> implements google.maps.MVCArray<T> {
    private vals;
    private listeners;
    clear(): void;
    getArray(): T[];
    getAt(i: number): T;
    getLength(): number;
    insertAt(i: number, elem: T): void;
    pop(): T;
    push(elem: T): number;
    removeAt(i: number): T;
    setAt(i: number, elem: T): void;
    forEach(callback: (elem: T, i: number) => void): void;
    addListener(eventName: 'remove_at' | 'insert_at' | 'set_at', handler: (...args: any[]) => void): google.maps.MapsEventListener;
    bindTo(): never;
    changed(): never;
    get(): never;
    notify(): never;
    set(): never;
    setValues(): never;
    unbind(): never;
    unbindAll(): never;
}
