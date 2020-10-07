import { Injectable } from '@angular/core';
import { Game } from './game';
import { GamesService } from '../app/games.service';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameArraysService {

  private arrays = {'Top Rated': new Array<Game>(), 'Most Rated': new Array<Game>(), 'Arcade': new Array<Game>(), 'Shooter': new Array<Game>(), 'Platform': new Array<Game>()}
  private list = Array<Game>();
  private sections = ['Top Rated','Most Rated','Arcade','Shooter','Platform']
  private subscription = new Subscription();


  constructor(private gamesService: GamesService, private http: HttpClient) {
    console.log("games service constructed")
   }

   getArray(set: string) {
     return this.arrays[set];
   }
}
