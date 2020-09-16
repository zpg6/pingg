import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FeedContainerComponent } from './feed-container/feed-container.component';
import { ObserverService } from './observer.service';
import { LoginBoxComponent } from './login-box/login-box.component';
import { SignInButtonsComponent } from './sign-in-buttons/sign-in-buttons.component';
import { MapContainerComponent } from './map-container/map-container.component';
import { ConnectContainerComponent } from './connect-container/connect-container.component';
import { ProfileContainerComponent } from './profile-container/profile-container.component';
import { ChatContainerComponent } from './chat-container/chat-container.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GoogleMapsModule } from '@angular/google-maps'
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import {FirebaseUIModule} from 'firebaseui-angular';
import * as firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
// // currently there is a bug while building the app with --prod
// // - https://github.com/RaphaelJenni/FirebaseUI-Angular/issues/76
// // the plugin exposes the two libraries as well. You can use those:
// import {FirebaseUIModule, firebase, firebaseui} from 'firebaseui-angular';

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    {
      scopes: [
        'public_profile',
        'email',
        'user_likes',
        'user_friends'
      ],
      customParameters: {
        'auth_type': 'reauthenticate'
      },
      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
    },
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    {
      requireDisplayName: true,
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
    },
  ],
  credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
};

// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return player;
}

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    LottieModule.forRoot({ player: playerFactory }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    FeedContainerComponent,
    LoginBoxComponent,
    SignInButtonsComponent,
    MapContainerComponent,
    ConnectContainerComponent,
    ProfileContainerComponent,
    ChatContainerComponent,
    SidebarComponent,
  ],
  providers: [ObserverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
