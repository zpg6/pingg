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

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
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
