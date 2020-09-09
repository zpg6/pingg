import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FeedContainerComponent } from './feed-container/feed-container.component';
import { ObserverService } from './observer.service';
import { LoginBoxComponent } from './login-box/login-box.component';
import { SignInButtonsComponent } from './sign-in-buttons/sign-in-buttons.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FeedContainerComponent,
    LoginBoxComponent,
    SignInButtonsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ObserverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
