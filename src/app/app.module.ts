import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FeedContainerComponent } from './feed-container/feed-container.component';
import { ObserverService } from './observer.service';
import { GamesService } from './games.service';
import { LoginBoxComponent } from './login-box/login-box.component';
import { SignInButtonsComponent } from './sign-in-buttons/sign-in-buttons.component';
import { MapContainerComponent } from './map-container/map-container.component';
import { GamesContainerComponent } from './games-container/games-container.component';
import { ProfileContainerComponent } from './profile-container/profile-container.component';
import { ChatContainerComponent } from './chat-container/chat-container.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GoogleMapsModule } from '@angular/google-maps'
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import {FirebaseUIModule} from 'firebaseui-angular';
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import { ReportIssueComponent } from './report-issue/report-issue.component';
import { GameCardComponent } from './game-card/game-card.component';
import { GameCardListComponent } from './game-card-list/game-card-list.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { ConversationsComponent } from './conversations/conversations.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { BrowseChannelsComponent } from './browse-channels/browse-channels.component';
import { BrowseGenresComponent } from './browse-genres/browse-genres.component';
import { BrowsePlatformsComponent } from './browse-platforms/browse-platforms.component'
import { ScrollingModule } from '@angular/cdk/scrolling'
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
    AngularFireStorageModule,
    HttpClientModule,
    ScrollingModule,
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    FeedContainerComponent,
    LoginBoxComponent,
    SignInButtonsComponent,
    MapContainerComponent,
    GamesContainerComponent,
    ProfileContainerComponent,
    ChatContainerComponent,
    SidebarComponent,
    ReportIssueComponent,
    GameCardComponent,
    GameCardListComponent,
    GameDetailComponent,
    ConversationsComponent,
    SearchBarComponent,
    BrowseChannelsComponent,
    BrowseGenresComponent,
    BrowsePlatformsComponent,
  ],
  providers: [ObserverService,GamesService, { provide: BUCKET, useValue: 'cs1530group11.appspot.com' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
