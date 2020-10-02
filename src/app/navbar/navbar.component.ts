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

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  appData: AppData;
  searchResult = Array<Game>();
  subscription = new Subscription();
  subscriptionRoute = new Subscription();
  subscriptionGame = new Subscription();
  subscriptionResults = new Subscription();
  title = 'Stock Manager';
  searchBox = '';
  updated = false;
  user = '';
  game: Game;

  constructor(private observerService: ObserverService, private router: Router,
    private afAuth: AngularFireAuth, private gamesService: GamesService) {

  }
  ngOnInit() {
    this.user = '' + this.randomIntFromInterval(1,100);
    this.subscriptionResults.add(this.gamesService.getResults().subscribe(games =>{
      this.searchResult = games;
    }))
    this.subscriptionGame.add(this.gamesService.observeGame().subscribe(game => {
      console.log('game retrieved in navbar component:')
      this.game = game;
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
    if (this.appData.navbarPage === this.pageFromString(to)) {
      return;
    }
    if (this.showMenu) {
      this.showMenu = false;
    }
    if (this.showSearchBox) {
      this.showSearchBox = false;
    }
    let newPage = '/' + to.toLowerCase();
    this.appData.navbarPage = this.pageFromString(to);
    console.log('Navbar Page is now ' + this.appData.navbarPage);
    this.updateObserver();
    this.router.navigate([newPage]);
  }

  getPage():string {
    if (this.appData.navbarPage === NavbarPage.game) {
      let name = this.game.name;
      if (name.length > 25) {
        return name.substring(0,24) + '...'
      } else {
        return name
      }
    }
    return this.appData.navbarPage
  }

  active(page: string):string {
    return (this.appData.navbarPage === page) ? 'is-active':'';
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
    return this.appData.navbarPage !== NavbarPage.game
  }

  description():string {
    if (this.appData.navbarPage === 'Feed') {
      return 'Latest on your favorites...';
    }
    if (this.appData.navbarPage === 'Map') {
      return 'Other players nearby...';
    }
    if (this.appData.navbarPage === 'Games') {
      return 'So many games...';
    }
    if (this.appData.navbarPage === 'Profile') {
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
