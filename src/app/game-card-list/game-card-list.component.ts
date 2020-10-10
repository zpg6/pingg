import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { AppData } from '../app-data';
import { Game } from '../game';
import { MiniGame } from '../mini-game';
import { GamesService } from '../games.service';
import { NavbarPage } from '../navbar-page.enum';
import { ObserverService } from '../observer.service';
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
  arrayOfMiniGames = new Array<MiniGame>()
  private serverURL = "https://smapi.ngrok.io"

  constructor(private gamesService: GamesService, private observerService: ObserverService,
              private router: Router, private http: HttpClient) {
                for (const genre in Genre) {
                  this.sections.push(genre)
                }
                this.gamesService.getAllMiniGames().subscribe( gamesArray => {
                  this.arrayOfMiniGames = gamesArray
                })
              }

  openGame(miniGame: MiniGame) {
    this.appData.navbarPage = NavbarPage.game;
    this.gamesService.setGameID(miniGame.id.toString());
    this.updateObserver();
    this.router.navigate(['/game'], {queryParams: {id: miniGame.id}});
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
  }

  getFrom(set: string): Promise<Array<MiniGame>> {
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

  async getTopRated(): Promise<Array<MiniGame>> {
    var body = {'offset': 0}
    return new Promise((res) => {
      return this.http.post<Array<MiniGame>>(this.serverURL + '/top-rated', {body})
                    .toPromise()
                    .then(games => {
                      res(games as Array<MiniGame>)
                    })
                    .catch(err => {
                      console.error(err)
                    })
    })
  }

  async getMostRated(): Promise<Array<MiniGame>> {
    var body = {'offset': 0}
    return new Promise((res) => {
      return this.http.post<Array<MiniGame>>(this.serverURL + '/most-rated', {body})
                    .toPromise()
                    .then(games => {
                      res(games as Array<MiniGame>)
                    })
                    .catch(err => {
                      console.error(err)
                    })
    })
  }

  getGamesByGenre(genre: string): Promise<Array<MiniGame>> {
    var body = {'genre': genre, 'offset': 0}
    return new Promise((res) => {
      return this.http.post<Array<MiniGame>>(this.serverURL + '/genre', {body})
                    .toPromise()
                    .then(games => {
                      res(games as Array<MiniGame>)
                    })
                    .catch(err => {
                      console.error(err)
                    })
    })
  }
}
