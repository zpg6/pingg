import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavbarPage } from '../navbar-page.enum';
import { AppData } from '../app-data';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ObserverService } from '../observer.service';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  appData: AppData;
  subscription = new Subscription();
  subscriptionRoute = new Subscription();
  title = 'Stock Manager';
  searchBox = '';
  updated = false;

  constructor(private observerService: ObserverService, private router: Router) {
      // subscribe to home component messages
      //console.log('constructor load up url = ' + router.url)
      this.subscription.add(observerService.getMessage().subscribe(message => {
        this.appData = message;
        console.log('Subscription updated @ NavbarComponent')
      }));
      console.log('Subscription created @ NavbarComponent')
  }
  ngOnInit() {}

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
  updateObserver() {
    this.observerService.sendMessage(this.appData);
  }

  showMenu = false;
  showSearchBox = false;

  clearSearch() {
    if (this.showSearchBox) {
      if (this.searchBox.length > 0) {
        this.searchBox = '';
      }  else {
        this.showSearchBox = false;
      }
    } else {

    }
  }

  setPage(to: string) {
    if (!(this.appData.isAuthenticated)) {
      return;
    }
    if (this.appData.navbarPage === this.pageFromString(to)) {
      return;
    }
    if (this.showMenu) {
      this.showMenu = false;
    }
    let newPage = '/' + to.toLowerCase();
    this.appData.navbarPage = this.pageFromString(to);
    console.log('Navbar Page is now ' + this.appData.navbarPage);
    this.updateObserver();
    this.router.navigate([newPage]);
  }

  getPage() {
    return this.appData.navbarPage
  }

  active(page: string):string {
    return this.appData.navbarPage === page ? 'is-active':'';
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

  logSearchBox() {
    console.log(this.searchBox);
  }

  description():string {
    if (this.appData.navbarPage === 'Feed') {
      return 'The latest on your favorites...';
    }
    if (this.appData.navbarPage === 'Map') {
      return 'Nearby players ready to match up...';
    }
    if (this.appData.navbarPage === 'Connect') {
      return 'Meet players with similar styles...';
    }
    if (this.appData.navbarPage === 'Profile') {
      return 'Show off what makes you unique...';
    }
    if (this.appData.navbarPage === 'Chat') {
      return 'Direct + Group Messaging...';
    }
    return '';
  }

  logout() {
    this.appData = new AppData();
    this.updateObserver();
  }
}
