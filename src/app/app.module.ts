import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FeedHeroComponent } from './feed-hero/feed-hero.component';
import { ObserverService } from './observer.service'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FeedHeroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ObserverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
