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
      this.list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
      // subscribe to home component messages
      // this.subscription.add(gamesService.getMessage().subscribe(message => {
      //   this.list = message;
      //   console.log('Subscription updated @ GameCardListComponent')
      // }));
      console.log('Subscription created @ GameCardListComponent')
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
