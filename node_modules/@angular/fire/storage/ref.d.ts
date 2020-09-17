import { ListResult, Reference, SettableMetadata, UploadMetadata } from './interfaces';
import { AngularFireUploadTask } from './task';
import { Observable } from 'rxjs';
import { ɵAngularFireSchedulers } from '@angular/fire';
export interface AngularFireStorageReference {
    getDownloadURL(): Observable<any>;
    getMetadata(): Observable<any>;
    delete(): Observable<any>;
    child(path: string): any;
    updateMetadata(meta: SettableMetadata): Observable<any>;
    put(data: any, metadata?: UploadMetadata | undefined): AngularFireUploadTask;
    putString(data: string, format?: string | undefined, metadata?: UploadMetadata | undefined): AngularFireUploadTask;
    listAll(): Observable<ListResult>;
}
/**
 * Create an AngularFire wrapped Storage Reference. This object
 * creates observable methods from promise based methods.
 */
export declare function createStorageRef(ref: Reference, schedulers: ɵAngularFireSchedulers, keepUnstableUntilFirst: <T>(obs$: Observable<T>) => Observable<T>): AngularFireStorageReference;
