import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppData } from './app-data';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ObserverService } from './observer.service';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
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
      }));
  }

  ngOnInit() {
    this.ar.url.subscribe(url => {
      var page = url[0].path.toString()
      if (page && page[0]) {
        page = page[0].toUpperCase() + page.substring(1,page.length)
      }
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
  }

  options: AnimationOptions = {
    path: '/assets/lottie-files/greenCircleExpanding.json',
  };

  onActivated() {
    window.scroll(0,0)
  }


}
