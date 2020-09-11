import { Component, OnDestroy, OnInit } from '@angular/core';
import { object } from 'firebase-functions/lib/providers/storage';
import { Subscription } from 'rxjs';
import { AppData } from '../app-data';
import { NavbarPage } from '../navbar-page.enum';
import { ObserverService } from '../observer.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {

  appData: AppData;
  subscription = new Subscription();

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

  getMenu() {
    this.menus.forEach(menu => {
      if (menu.page === this.appData.navbarPage) {
        return menu.items;
      }
    })
  }

  menus: [{
    page: NavbarPage.search,
    items: [
      {
        section: 'Sort By',
        links: [
          'Most Rated',
          'Top Rated',
          'Newest',
          'Oldest',
        ],
      },
      {
        section: 'Filter By',
        links: [
          'Platform',
          'Genre',
        ],
      },
    ]
  }]

}
