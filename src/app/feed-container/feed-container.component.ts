import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavbarPage } from '../navbar-page.enum'
import { AppData } from '../app-data';
import { Subscription } from 'rxjs';
import { ObserverService } from '../observer.service';

@Component({
  selector: 'app-feed-hero',
  templateUrl: './feed-container.component.html',
  styleUrls: ['./feed-container.component.css']
})
export class FeedContainerComponent implements OnInit, OnDestroy {

  appData: AppData;
  subscription = new Subscription();
  title = 'Stock Manager';
  nums:number[] = [1,2,3,3]

  constructor(private observerService: ObserverService) {
      // subscribe to home component messages
      this.subscription.add(observerService.getMessage().subscribe(message => {
        this.appData = message;
        console.log('Subscription updated @ FeedContainerComponent')
      }));
      console.log('Subscription created @ FeedContainerComponent')
  }
  ngOnInit() {

  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
  updateObserver() {
    this.observerService.sendMessage(this.appData);
  }

  isHome():boolean {
    return this.appData.navbarPage == NavbarPage.home
  }

  getPage():string {
    return this.appData.navbarPage
  }

}
