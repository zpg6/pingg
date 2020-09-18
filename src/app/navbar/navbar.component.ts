import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavbarPage } from '../navbar-page.enum';
import { AppData } from '../app-data';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ObserverService } from '../observer.service';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';

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
  user = '';

  constructor(private observerService: ObserverService, private router: Router,
    private afAuth: AngularFireAuth) {
      // subscribe to home component messages
      //console.log('constructor load up url = ' + router.url)
      this.user = '' + this.randomIntFromInterval(1,100);
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

  getUser() {
    return this.user;
  }

  randomIntFromInterval(min: number, max: number) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  showMenu = false;
  showSearchBox = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
    if (this.showSearchBox) {
      this.showSearchBox = false;
    }
  }

  search() {
    if (this.searchBox.length > 0) {
      console.log('searched for: ' + this.searchBox);
      this.searchBox = '';
    }  else {
      this.showSearchBox = false;
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
      return 'Latest on your favorites...';
    }
    if (this.appData.navbarPage === 'Map') {
      return 'Other players nearby...';
    }
    if (this.appData.navbarPage === 'Connect') {
      return 'Recommendations from us...';
    }
    if (this.appData.navbarPage === 'Profile') {
      return 'What makes you unique...';
    }
    if (this.appData.navbarPage === 'Chat') {
      return 'Direct + Group Messaging...';
    }
    return '';
  }

  reportIssue() {
    if (!(this.appData.reportingIssue)) {
      if (this.showMenu) {
        this.showMenu = false;
      }
      this.appData.reportingIssue = true;
      this.updateObserver();
    }
  }

  logout() {
    this.afAuth.signOut();
    this.appData = new AppData();
    this.updateObserver();
  }
}
