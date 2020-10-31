import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppData } from './app-data';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ObserverService } from './observer.service';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { NavbarPage } from './navbar-page.enum';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { GamesService } from './games.service';
import { HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'pingg'
  appData: AppData;
  subscription = new Subscription();
  public lottieConfig: Object = {
    path: 'assets/lottie-files/greenCircleExpanding.json',
    renderer: 'canvas',
    autoplay: true,
    loop: true
  };
  anim: any;
  private animationSpeed: number = 1;
  environment;

  constructor(private observerService: ObserverService, private gamesService: GamesService, private router: Router, private ar: ActivatedRoute) {
      // subscribe to home component messages
      this.environment = environment;
      this.subscription.add(observerService.getMessage().subscribe(message => {
        this.appData = message;
        console.log('Subscription updated @ AppComponent')
      }));
      console.log('Subscription created @ AppComponent')
  }
  ngOnInit() {
    this.ar.url.subscribe(url => {
      var page = url[0].path.toString()
      page = page[0].toUpperCase() + page.substring(1,page.length)
      console.log(page)
      this.title = page
    })
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
  updateObserver() {
    this.observerService.sendMessage(this.appData);
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  options: AnimationOptions = {
    path: '/assets/lottie-files/greenCircleExpanding.json',
  };

  pageFromString(page: string):NavbarPage {
    if (page.toLowerCase() === 'feed' || page.length == 0) {
      return NavbarPage.feed;
    }
    if (page.toLowerCase() === 'map') {
      return NavbarPage.map;
    }
    if (page.toLowerCase() === 'games') {
      return NavbarPage.games;
    }
    if (page.toLowerCase() === 'profile') {
      return NavbarPage.profile;
    }
    if (page.toLowerCase() === 'search') {
      return NavbarPage.search;
    }
    if (page.toLowerCase() === 'game') {
      return NavbarPage.game;
    }
    return NavbarPage.feed;
  }



}
