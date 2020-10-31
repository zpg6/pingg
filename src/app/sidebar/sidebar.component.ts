import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppData } from '../app-data';
import { Genre } from '../genre.enum';
import { Platform } from '../platform.enum';
import { NavbarPage } from '../navbar-page.enum';
import { ObserverService } from '../observer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {

  title = ''
  appData: AppData;
  subscription = new Subscription();
  expanded = '';
  activeChannel = '#all';
  channels = ['#all', '#channel1', '#channel2', '#channel3'];

  constructor(private observerService: ObserverService, private ar: ActivatedRoute) {
      // subscribe to home component messages
      this.subscription.add(observerService.getMessage().subscribe(message => {
        this.appData = message;
        console.log('Subscription updated @ SidebarComponent')
      }));
      console.log('Subscription created @ SidebarComponent')
  }
  ngOnInit() {
    this.ar.url.subscribe(url => {
      var page = url[0].path.toString()
      page = page[0].toUpperCase() + page.substring(1,page.length)
      console.log(page)
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

  toggleExpand(section: string) {
    if (this.expanded === section) {
      this.expanded = '';
    } else {
      this.expanded = section;
    }
  }

  newPost() {
    this.appData.newPostModalOpen = true;
    this.updateObserver();
  }

  newChannel() {
    this.appData.newChannelModalOpen = true;
    this.updateObserver();
  }

  channelClicked(channel: string) {
    this.activeChannel = channel
    this.appData.selectedChannel = channel
    this.updateObserver()
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
      return this.channels;
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
    if (this.title === 'Feed') {
      return ['Channels']
    }
    if (this.title === 'Games') {
      return ['Sort By','Filter By']
    }
    return [];
  }

}
