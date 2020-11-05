import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppData } from '../app-data';
import { MiniGame } from '../mini-game';
import { GamesService } from '../games.service';
import { NavbarPage } from '../navbar-page.enum';
import { ObserverService } from '../observer.service';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit, OnDestroy {

  appData: AppData;
  subscription = new Subscription();
  expanded = '';

  constructor(private gamesService: GamesService) {
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  @Input() game: MiniGame;

  getTitle():string {
    if (!this.game || !this.game.name || this.game.name.length == 0)
      return
    let name = this.game.name;
    if (name.length > 25) {
      return name.slice(0,24) + '...'
    } else {
      return name
    }
  }
}
