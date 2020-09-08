import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FeedHeroComponent } from './feed-hero/feed-hero.component';
import { ObserverService } from './observer.service';
import { LoginBoxComponent } from './login-box/login-box.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FeedHeroComponent,
    LoginBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ObserverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
