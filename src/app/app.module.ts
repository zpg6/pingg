import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
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
import { AngularFireAuthGuard } from '@angular/fire/auth-guard'
import { environment } from '../environments/environment';
import {FirebaseUIModule} from 'firebaseui-angular';
import * as firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import { ReportIssueComponent } from './report-issue/report-issue.component';
import { GameCardComponent } from './game-card/game-card.component';
import { GameCardListComponent } from './game-card-list/game-card-list.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { ConversationsComponent } from './conversations/conversations.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { BrowseChannelsComponent } from './browse-channels/browse-channels.component';
import { BrowseGenresComponent } from './browse-genres/browse-genres.component';
import { BrowsePlatformsComponent } from './browse-platforms/browse-platforms.component'
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NewPostModalComponent } from './new-post-modal/new-post-modal.component';
import { NewChannelModalComponent } from './new-channel-modal/new-channel-modal.component';
import { PostCellComponent } from './post-cell/post-cell.component'
// // currently there is a bug while building the app with --prod
// // - https://github.com/RaphaelJenni/FirebaseUI-Angular/issues/76
// // the plugin exposes the two libraries as well. You can use those:
// import {FirebaseUIModule, firebase, firebaseui} from 'firebaseui-angular';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { CardGridComponent } from './card-grid/card-grid.component';
import { CardGridContainerComponent } from './card-grid-container/card-grid-container.component';
import { OnboardingModalComponent } from './onboarding-modal/onboarding-modal.component';
import { OnboardingStepsComponent } from './onboarding-steps/onboarding-steps.component';
import { ObBasicComponent } from './ob-basic/ob-basic.component';
import { ObScreenNamesComponent } from './ob-screen-names/ob-screen-names.component';
import { ObCustomizeComponent } from './ob-customize/ob-customize.component';
import { GameSearchComponent } from './game-search/game-search.component';
import { PingService } from './ping.service';
import { FooterCardComponent } from './footer-card/footer-card.component';
import { UserCellComponent } from './user-cell/user-cell.component';
import { RateGameModalComponent } from './rate-game-modal/rate-game-modal.component';
import { UploadTaskComponent } from './upload-task/upload-task.component';
import { UploaderComponent } from './uploader/uploader.component';
import { UploadZoneDirective } from './upload-zone.directive';
import { FeedComponent } from './feed/feed.component';
import { GameCardSmallComponent } from './game-card-small/game-card-small.component';
import { LazyImageComponent } from './lazy-image/lazy-image.component'
import { PostsService } from './posts.service'
import { ProfileService } from './profile.service';
import { RelativeTimePipe } from './relative-time.pipe'
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { CommentComponent } from './comment/comment.component';
import { SinglePostComponent } from './single-post/single-post.component';

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
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
    YouTubePlayerModule,
    ShareButtonsModule,
    ShareIconsModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCvJ7fjvweZlcJhOSWyfJ8m7ZwwUO6L0VQ',
      libraries:['visualization']
    }),

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
    NewPostModalComponent,
    NewChannelModalComponent,
    PostCellComponent,
    CardGridComponent,
    CardGridContainerComponent,
    OnboardingModalComponent,
    OnboardingStepsComponent,
    ObBasicComponent,
    ObScreenNamesComponent,
    ObCustomizeComponent,
    GameSearchComponent,
    FooterCardComponent,
    UserCellComponent,
    RateGameModalComponent,
    UploadTaskComponent,
    UploaderComponent,
    UploadZoneDirective,
    FeedComponent,
    GameCardSmallComponent,
    LazyImageComponent,
    RelativeTimePipe,
    CommentComponent,
    SinglePostComponent,
  ],
  providers: [
    ObserverService,
    GamesService,
    AngularFireAuthGuard,
    PingService,
    PostsService,
    ProfileService,
    { provide: BUCKET, useValue: 'cs1530group11.appspot.com' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
