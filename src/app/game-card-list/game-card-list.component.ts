import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Game } from '../game';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-game-card-list',
  templateUrl: './game-card-list.component.html',
  styleUrls: ['./game-card-list.component.css']
})
export class GameCardListComponent implements OnInit, OnDestroy {

  list = Array<Game>();
  list2 = Array<Game>();
  subscription = new Subscription();

  constructor(private gamesService: GamesService) {

  }

  ngOnInit() {
    let debug = false;
      if (debug) {
        //this.list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
      }
      else {
        console.log('Games Subscription being created @ GameCardListComponent')
        this.gamesService.getGames().subscribe(message => {
          this.list = message;
          console.log('Games Subscription updated @ GameCardListComponent')
          console.table(this.list);
        });
      }
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
  }
}
