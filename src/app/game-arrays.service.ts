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
      this.list = message;
      for(var i in this.sections) {
        this.arrays[this.sections[i]] = this.getFrom(this.sections[i])
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
      let filtered = this.list.filter(game => {
        return game.genres.includes(set);
      })
      console.log('found ' + filtered.length + ' games for set = ' + set);
      return filtered
    }
  }

  getTopRated():Array<Game> {
    console.log("getting top rated")
    return this.list.sort( (a,b) => {
      if (a.rating > b.rating) {
        return -1
      }
      if (a.rating < b.rating) {
        return 1
      }
      return 0;
    })
  }

  getMostRated():Array<Game> {
    return this.list.sort( (a,b) => {
      if (a.ratingCount > b.ratingCount) {
        return -1
      }
      if (a.ratingCount < b.ratingCount) {
        return 1
      }
      return 0;
    })
  }
}
