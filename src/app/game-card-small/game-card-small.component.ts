import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-card-small',
  templateUrl: './game-card-small.component.html',
  styleUrls: ['./game-card-small.component.css']
})
export class GameCardSmallComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('game') game: any;

  getTitle():string {
    let name = this.game.name;
    if (name.length > 18) {
      return name.slice(0,18) + '...'
    } else {
      return name
    }
  }

}
