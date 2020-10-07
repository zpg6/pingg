import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { AppData } from '../app-data';
import { Game } from '../game';
import { GamesService } from '../games.service';
import { NavbarPage } from '../navbar-page.enum';
import { ObserverService } from '../observer.service';
import { GameArraysService } from '../game-arrays.service'
import { HttpClient } from '@angular/common/http';
import { Genre } from '../genre.enum';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-game-card-list',
  templateUrl: './game-card-list.component.html',
  styleUrls: ['./game-card-list.component.css']
})
export class GameCardListComponent implements OnInit, OnDestroy {

  list = Array<Game>();
  sections = ['Top Rated','Most Rated']
  appData: AppData;
  subscription = new Subscription();
  appDataSubscription = new Subscription();
  arrayOfGames = new Array<Game>()
  private serverURL = "https://smapi.ngrok.io"

  constructor(private gamesService: GamesService, private observerService: ObserverService,
              private router: Router, private http: HttpClient) {
                for (const genre in Genre) {
                  this.sections.push(genre)
                }
              }

  openGame(game: Game) {
    this.appData.navbarPage = NavbarPage.game;
    this.gamesService.setGame(game);
    this.updateObserver();
    this.router.navigate(['/game'], {queryParams: {id: game.id}});
  }

  ngOnInit() {
    this.getSetArray('set')
    this.appDataSubscription.add(this.observerService.getMessage().subscribe(message => {
      this.appData = message;
      console.log('Subscription updated @ GameCardListComponent')
    }));
    console.log('Subscription created @ GameCardListComponent')
    console.log('Games Subscription being created @ GameCardListComponent')

  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
    this.appDataSubscription.unsubscribe();
  }

  updateObserver() {
    this.observerService.sendMessage(this.appData);
  }


  getSetArray(set: string) {
    console.log("get set array")
    //let result = this.arrayService.getArray(set);
    this.gamesService.getAll().subscribe( gamesArray => {
      this.arrayOfGames = gamesArray
    })
  }

  getFrom(set: string): Observable<Array<Game>> {
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

  getTopRated(): Observable<Array<Game>> {
    return this.http.get<Array<Game>>(this.serverURL + '/top-rated')
  }

  getMostRated(): Observable<Array<Game>>{
    return this.http.get<Array<Game>>(this.serverURL + '/most-rated')
  }

  getGamesByGenre(genre: string): Observable<Array<Game>> {
    var body = {'genre': genre}
    return this.http.post<Array<Game>>(this.serverURL + '/genre', {body})
  }
}
