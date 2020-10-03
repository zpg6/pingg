import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppData } from '../app-data';
import { Genre } from '../genre.enum';
import { Platform } from '../platform.enum';
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
      return Object.values(Genre).sort();
    }
    if (section === 'Platform') {
      return Object.values(Platform).sort();
    }
    return [];
  }

  getSections(title: string):string[] {
    if (title === 'Channels') {
      return ['All', '#Channel1', '#Channel2', '#Channel3']
    }
    if (title === 'Filter By') {
      return ['Genre','Platform'];
    }
    if (title === 'Sort By') {
      return ['Top Rated','Most Rated','Newest','Oldest'];
    }
    if (title === 'Games') {
      return ['Genre','Platform'];
    }
    return [];
  }

  getTitles():string[] {
    if (this.appData.navbarPage === NavbarPage.feed) {
      return ['Channels']
    }
    if (this.appData.navbarPage === NavbarPage.games) {
      return ['Sort By','Filter By']
    }
    return [];
  }

}
