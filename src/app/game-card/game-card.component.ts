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

  @Input() game;

}
