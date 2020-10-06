import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { AppData } from '../app-data';
import { Game } from '../game';
import { GamesService } from '../games.service';
import { NavbarPage } from '../navbar-page.enum';
import { ObserverService } from '../observer.service';
import { GameArraysService } from '../game-arrays.service'

@Component({
  selector: 'app-game-card-list',
  templateUrl: './game-card-list.component.html',
  styleUrls: ['./game-card-list.component.css']
})
export class GameCardListComponent implements OnInit, OnDestroy {

  list = Array<Game>();
  sections = ['Top Rated','Most Rated','Arcade','Shooter','Platform']
  appData: AppData;
  subscription = new Subscription();
  appDataSubscription = new Subscription();
  arrayOfGames = new Array<Game>()

  constructor(private gamesService: GamesService, private observerService: ObserverService, private router: Router, private arrayService: GameArraysService) {}

  openGame(game: Game) {
    this.appData.navbarPage = NavbarPage.game;
    this.gamesService.setGame(game);
    this.updateObserver();
    this.router.navigate(['/game'], {queryParams: {id: game.id}});
  }

  ngOnInit() {
    this.getSetArray('set')
    this.appDataSubscription.add(this.observerService.getMessage().subscribe(message => {
      this.appData = message;
      console.log('Subscription updated @ GameCardListComponent')
    }));
    console.log('Subscription created @ GameCardListComponent')
    console.log('Games Subscription being created @ GameCardListComponent')
    
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
    this.appDataSubscription.unsubscribe();
  }

  updateObserver() {
    this.observerService.sendMessage(this.appData);
  }


  getSetArray(set: string) {
    console.log("get set array")
    //let result = this.arrayService.getArray(set);
    this.gamesService.getAll().subscribe( gamesArray => {
      this.arrayOfGames = gamesArray
    })
  }
}
