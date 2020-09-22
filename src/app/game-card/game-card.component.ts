import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppData } from '../app-data';
import { Game } from '../game';
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

  constructor() {
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  @Input() game: Game;

  getTitle():string {
    let name = this.game.name;
    if (name.length > 25) {
      return name.substring(0,24) + '...'
    } else {
      return name
    }
  }

  getGenre():string {
    if (this.game?.genres?.length > 0) {
      return this.game.genres[0];
    } else {
      return '';
    }
  }
}
