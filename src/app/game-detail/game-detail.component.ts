import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppData } from '../app-data';
import { Game } from '../game';
import { GamesService } from '../games.service';
import { ObserverService } from '../observer.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit, OnDestroy {

  appData: AppData;
  subscriptionGame = new Subscription();
  subscription = new Subscription();
  game: Game;

  constructor(private observerService: ObserverService, private gamesService: GamesService) {
      // subscribe to home component messages
      this.subscriptionGame.add(gamesService.observeGame().subscribe(game => {
        console.log('game retrieved in detail component:')
        this.game = game;
        console.log('GamesService Subscription updated @ GameDetailComponent for ' + (this.game ? this.game.id:'unknown game.'))
      }))
      console.log('GamesService Subscription created @ GameDetailComponent for ' + (this.game ? this.game.id:'unknown game.'))
      this.subscription.add(observerService.getMessage().subscribe(message => {
        this.appData = message;
        console.log('AppData Subscription updated @ GameDetailComponent for ' + (this.game ? this.game.id:'unknown game.'))
      }));
      console.log('AppData Subscription created @ GameDetailComponent for ' + (this.game ? this.game.id:'unknown game.'))
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

  getTitle() {
    return this.game?.name.replace(' - ',' -&NewLine;').toString()
  }
}
