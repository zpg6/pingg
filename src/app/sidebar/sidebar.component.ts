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
  expanded = '';

  constructor(private observerService: ObserverService) {
      // subscribe to home component messages
      this.subscription.add(observerService.getMessage().subscribe(message => {
        this.appData = message;
        console.log('Subscription updated @ SidebarComponent')
      }));
      console.log('Subscription created @ SidebarComponent')
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

  toggleExpand(section: string) {
    if (this.expanded === section) {
      this.expanded = '';
    } else {
      this.expanded = section;
    }
  }

  getOptions(section: string):string[] {
    if (!(this.expanded === section)) { return []; }
    if (section === 'Genre') {
      return ['Arcade','Fantasy','Puzzle','Shooter'];
    }
    if (section === 'Platform') {
      return ['Console','Desktop','Mobile'];
    }
    return [];
  }

  getSections(title: string):string[] {
    if (title === 'Filter By') {
      return ['Genre','Platform'];
    }
    if (title === 'Sort By') {
      return ['Top Rated','Most Rated','Newest','Oldest'];
    }
    if (title === 'Connect With') {
      return ['Games','Players'];
    }
    return [];
  }

  getTitles():string[] {
    if (this.appData.navbarPage === NavbarPage.feed) {
      return ['Filter By']
    }
    if (this.appData.navbarPage === NavbarPage.connect) {
      return ['Connect With','Sort By','Filter By']
    }
    return [];
  }

}
