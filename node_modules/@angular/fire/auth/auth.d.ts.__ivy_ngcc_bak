import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseOptions, FirebaseAppConfig, ɵPromiseProxy } from '@angular/fire';
import { User, auth } from 'firebase/app';
export interface AngularFireAuth extends ɵPromiseProxy<auth.Auth> {
}
export declare class AngularFireAuth {
    /**
     * Observable of authentication state; as of Firebase 4.0 this is only triggered via sign-in/out
     */
    readonly authState: Observable<User | null>;
    /**
     * Observable of the currently signed-in user's JWT token used to identify the user to a Firebase service (or null).
     */
    readonly idToken: Observable<string | null>;
    /**
     * Observable of the currently signed-in user (or null).
     */
    readonly user: Observable<User | null>;
    /**
     * Observable of the currently signed-in user's IdTokenResult object which contains the ID token JWT string and other
     * helper properties for getting different data associated with the token as well as all the decoded payload claims
     * (or null).
     */
    readonly idTokenResult: Observable<auth.IdTokenResult | null>;
    constructor(options: FirebaseOptions, nameOrConfig: string | FirebaseAppConfig | null | undefined, platformId: Object, zone: NgZone);
}
