import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppData } from './app-data';
import { Subscription } from 'rxjs';
import { ObserverService } from './observer.service';
import { ActivatedRoute } from '@angular/router';
import { NavbarPage } from './navbar-page.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  appData: AppData;
  subscription = new Subscription();
  subscription2 = new Subscription();
  title = 'Stock Manager';

  constructor(private observerService: ObserverService, private activatedRoute: ActivatedRoute) {
      // subscribe to home component messages
      this.subscription.add(observerService.getMessage().subscribe(message => {
        this.appData = message;
        console.log('Subscription updated @ FeedHeroComponent')
      }));
      this.subscription2.add(activatedRoute.paramMap.subscribe(map =>{
        let to = this.pageFromString(map.get('to'));
        if (!(to === this.appData.navbarPage)) {
          this.appData.navbarPage = to;
          this.updateObserver();
        }
      }));
      console.log('Subscription created @ FeedHeroComponent')
  }
  ngOnInit() {}

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
  updateObserver() {
    this.observerService.sendMessage(this.appData);
  }

  pageFromString(page: string):NavbarPage {
    if (page.toLowerCase() === 'feed') {
      return NavbarPage.feed;
    }
    if (page.toLowerCase() === 'map') {
      return NavbarPage.map;
    }
    if (page.toLowerCase() === 'connect') {
      return NavbarPage.connect;
    }
    if (page.toLowerCase() === 'profile') {
      return NavbarPage.profile;
    }
    if (page.toLowerCase() === 'chat') {
      return NavbarPage.chat;
    }
    if (page.toLowerCase() === 'search') {
      return NavbarPage.search;
    }
    return NavbarPage.feed;
  }
}
