import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-post-cell',
  templateUrl: './post-cell.component.html',
  styleUrls: ['./post-cell.component.css']
})
export class PostCellComponent implements OnInit {

  rand;
  game;
  votes = 0;
  voted = false;

  constructor(private gamesService: GamesService) {
    this.rand = Math.round(Math.random()*100+Math.random()*100);
    let names = gamesService.getSet('Top Rated')
    let index = Math.round(Math.random()*names.length)
    this.game = names[index]
   }

  ngOnInit(): void {
  }

  vote() {
    if (this.voted) {
      if (this.votes > 0) this.votes--;
    } else {
      this.votes++;
    }
    this.voted = !this.voted
  }

  gameName() {
    if (this.game.name.length > 15) {
      return this.game.name.slice(0,15) + '...'
    } else {
      return this.game.name
    }
  }

}
