import { Injectable } from '@angular/core';
import { Game } from './game';
import { GamesService } from '../app/games.service';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameArraysService {

  private arrays = {'Top Rated': new Array<Game>(), 'Most Rated': new Array<Game>(), 'Arcade': new Array<Game>(), 'Shooter': new Array<Game>(), 'Platform': new Array<Game>()}
  private list = Array<Game>();
  private sections = ['Top Rated','Most Rated','Arcade','Shooter','Platform']
  private subscription = new Subscription();

  constructor(private gamesService: GamesService) {
    this.subscription = this.gamesService.getGames().subscribe(message => {
      if(message.values) {
        this.list = message.values.prototype;
        for(var i in this.sections) {
          this.arrays[this.sections[i]] = this.getFrom(this.sections[i])
        }
      }
    });
   }

   getArray(set: string) {
     return this.arrays[set];
   }

   getFrom(set: string):Array<Game> {
    if (set === 'Top Rated') {
      return this.getTopRated();
    }
    else if (set === 'Most Rated') {
      return this.getMostRated();
    }
    else {
      this.getGamesByGenre(set);
    }
  }

  getTopRated(): Array<Game>{
    // Query the server
    return Array<Game>()
  }

  getMostRated(){
    // Query the server
    return Array<Game>()
  }

  getGamesByGenre(genre: string): Array<Game> {
    //query the server
    return Array<Game>()
  }
}
