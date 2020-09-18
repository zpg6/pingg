import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-game-card-list',
  templateUrl: './game-card-list.component.html',
  styleUrls: ['./game-card-list.component.css']
})
export class GameCardListComponent implements OnInit, OnDestroy {

  list: Array<any>;
  subscription = new Subscription();

  constructor(private gamesService: GamesService) {
      // subscribe to home component messages
      this.subscription.add(gamesService.getMessage().subscribe(message => {
        this.list = message;
        console.log('Subscription updated @ GameCardListComponent')
      }));
      console.log('Subscription created @ GameCardListComponent')
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
