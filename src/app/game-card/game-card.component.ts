import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../game';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() game: Game;

  getGenre():string {
    if (this.game?.genres?.length > 0) {
      return this.game.genres[0];
    } else {
      return '';
    }
  }
}
