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
      router.events.pipe(
        filter( (event: NavigationStart) =>  {
          return (event instanceof NavigationStart);
        })
      ).subscribe( (event: NavigationStart) => {
        let url = event.url;
        url = url.replace('/','');
        if (url.includes('?')) {
          url = url.substring(0, url.indexOf('?'));
        }
        console.log('url from appComp = ' + url);
        let page = this.pageFromString(url);
        if (page === NavbarPage.game) {
          this.ar.queryParamMap
            .subscribe(async (params) => {
              let id = params.get('id');
              console.log(`setting game id as ${id}`)
              this.gamesService.setGameID(id);
            }
          );
        }
        if (this.appData.navbarPage !== page) {
          this.appData.navbarPage = page;
          this.updateObserver();
        }
      })
      console.log('Subscription created @ AppComponent')
  }
  ngOnInit() {}

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
