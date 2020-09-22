import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { AppData } from '../app-data';
import { Game } from '../game';
import { GamesService } from '../games.service';
import { NavbarPage } from '../navbar-page.enum';
import { ObserverService } from '../observer.service';

@Component({
  selector: 'app-game-card-list',
  templateUrl: './game-card-list.component.html',
  styleUrls: ['./game-card-list.component.css']
})
export class GameCardListComponent implements OnInit, OnDestroy {

  list = Array<Game>();
  sections = ['Top Rated','Most Rated','Arcade','Shooter','Platform']
  loading = true;
  appData: AppData;
  subscription = new Subscription();
  appDataSubscription = new Subscription();
  constructor(private gamesService: GamesService, private observerService: ObserverService, private router: Router) {
    this.appDataSubscription.add(observerService.getMessage().subscribe(message => {
      this.appData = message;
      console.log('Subscription updated @ GameCardListComponent')
    }));
    console.log('Subscription created @ GameCardListComponent')
    let debug = false;
      if (debug) {
        //this.list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
      }
      else {
        console.log('Games Subscription being created @ GameCardListComponent')
        this.subscription = this.gamesService.getGames().subscribe(message => {
          this.list = message;
          this.loading = false;
          console.log('Games Subscription updated @ GameCardListComponent')
        });
      }
  }

  openGame(game: Game) {
    this.appData.navbarPage = NavbarPage.game;
    this.gamesService.setGame(game);
    this.updateObserver();
    this.router.navigate(['/game'], {queryParams: {id: game.id}});
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

  getFrom(set: string):Array<Game> {
    if (set === 'Top Rated') {
      return this.getTopRated();
    }
    else if (set === 'Most Rated') {
      return this.getMostRated();
    }
    else {
      let filtered = this.list.filter(game => {
        return game.genres.includes(set);
      })
      console.log('found ' + filtered.length + ' games for set = ' + set);
      return filtered
    }
  }

  getTopRated():Array<Game> {
    return this.list.sort( (a,b) => {
      if (a.rating > b.rating) {
        return -1
      }
      if (a.rating < b.rating) {
        return 1
      }
      return 0;
    })
  }

  getMostRated():Array<Game> {
    return this.list.sort( (a,b) => {
      if (a.ratingCount > b.ratingCount) {
        return -1
      }
      if (a.ratingCount < b.ratingCount) {
        return 1
      }
      return 0;
    })
  }
}
