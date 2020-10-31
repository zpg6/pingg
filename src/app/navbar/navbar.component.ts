import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavbarPage } from '../navbar-page.enum';
import { AppData } from '../app-data';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ObserverService } from '../observer.service';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import { GamesService } from '../games.service';
import { Game } from '../game';
import { MiniGame } from '../mini-game';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  appData: AppData;
  searchResult = Array<MiniGame>();
  subscription = new Subscription();
  subscriptionRoute = new Subscription();
  subscriptionGame = new Subscription();
  subscriptionResults = new Subscription();
  title = 'pingg';
  searchBox = '';
  updated = false;
  user = '';
  game= new Game();

  constructor(private observerService: ObserverService, private router: Router,
    private afAuth: AngularFireAuth, private gamesService: GamesService, private ar: ActivatedRoute) {

  }
  ngOnInit(){}

  ngAfterViewInit() {
    this.ar.url.subscribe(url => {
      if (url && url.length>0) {
        console.log(url)
        var page = url[0].path.toString()
        page = page[0].toUpperCase() + page.substring(1,page.length)
        console.log(page)
        this.title = page
      }
    })
    this.user = '' + this.randomIntFromInterval(1,100);
    this.subscriptionResults.add(this.gamesService.searchResults.asObservable().subscribe(games =>{
      this.searchResult = games;
    }))
    this.subscription.add(this.observerService.getMessage().subscribe(message => {
      this.appData = message;
      console.log('Subscription updated @ NavbarComponent')
    }));
    console.log('Subscription created @ NavbarComponent')
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
    this.subscriptionGame.unsubscribe();
    this.subscriptionResults.unsubscribe();
    this.subscriptionRoute.unsubscribe();
  }
  updateObserver() {
    this.observerService.sendMessage(this.appData);
  }


  openSearchBar() {
    if (this.appData.searchBarOpen) { return }
    this.appData.searchBarOpen = true;
    this.updateObserver();
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
    if (this.title === this.pageFromString(to)) {
      return;
    }
    if (this.showMenu) {
      this.showMenu = false;
    }
    if (this.showSearchBox) {
      this.showSearchBox = false;
    }
    // let newPage = '/' + to.toLowerCase();
    // this.router.navigate([newPage]);
  }

  getPage():string {
    if (this.title === NavbarPage.game) {
      let name = this.game.name;
      if (name.length > 25) {
        return name.substring(0,24) + '...'
      } else {
        return name
      }
    }
    return this.title
  }

  active(page: string):string {
    return (this.title === page) ? 'is-active':'';
  }

  pageFromString(page: string):NavbarPage {
    if (page.toLowerCase() === 'feed') {
      return NavbarPage.feed;
    }
    if (page.toLowerCase() === 'map') {
      return NavbarPage.map;
    }
    if (page.toLowerCase() === 'games') {
      return NavbarPage.games;
    }
    if (page.toLowerCase() === 'profile') {
      return NavbarPage.profile;
    }
    if (page.toLowerCase() === 'search') {
      return NavbarPage.search;
    }
    if (page.toLowerCase() === 'game') {
      return NavbarPage.game;
    }
    return NavbarPage.feed;
  }

  logSearchBox() {
    console.log(this.searchBox);
  }

  showBar():boolean {
    return this.title !== 'Games'
  }

  description():string {
    if (this.title === 'Feed') {
      if (this.appData.selectedChannel === '' || this.appData.selectedChannel === '#all') {
        return 'Latest on your favorites...';
      }
        return this.appData.selectedChannel;
    }
    if (this.title === 'Map') {
      return 'Other players nearby...';
    }
    if (this.title === 'Games') {
      return 'So many games...';
    }
    if (this.title === 'Profile') {
      return 'What makes you unique...';
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
