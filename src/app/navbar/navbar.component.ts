import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavbarPage } from '../navbar-page.enum';
import { AppData } from '../app-data';
import { Subscription } from 'rxjs';
import { ObserverService } from '../observer.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  appData: AppData;
  subscription = new Subscription();
  title = 'Stock Manager'

  constructor(private observerService: ObserverService) {
      // subscribe to home component messages
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

  setPage(to: string) {
    console.log('page changed to ' + to);
    this.appData.navbarPage = this.pageFromString(to);
    console.log('page is now ' + this.appData.navbarPage);
    this.updateObserver();
  }

  active(page: string):string {
    return this.appData.navbarPage === page ? 'is-active':'';
  }

  pageFromString(page: string):NavbarPage {
    if (page === 'Feed') {
      return NavbarPage.feed;
    }
    if (page === 'Map') {
      return NavbarPage.map;
    }
    if (page === 'Connect') {
      return NavbarPage.connect;
    }
    if (page === 'Profile') {
      return NavbarPage.profile;
    }
    if (page === 'Chat') {
      return NavbarPage.chat;
    }
    if (page === 'Login') {
      return NavbarPage.login;
    }
    if (page === 'Create Account') {
      return NavbarPage.createAccount;
    }
    return NavbarPage.home;
  }
}
