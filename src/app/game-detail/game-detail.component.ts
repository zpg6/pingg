import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AppData } from '../app-data';
import { Game } from '../game';
import { GamesService } from '../games.service';
import { NavbarPage } from '../navbar-page.enum';
import { ObserverService } from '../observer.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit, OnDestroy {

  appData: AppData;
  subscriptionRecommended = new Subscription();
  subscriptionGame = new Subscription();
  subscription = new Subscription();
  game: Game;
  recommended: Array<Game>;

  constructor(private observerService: ObserverService, private gamesService: GamesService, private router: Router) {
      // subscribe to home component messages
      this.subscriptionGame.add(gamesService.observeGame().subscribe(game => {
        this.game = game;
        if (game?.similarGames?.length > 0) {
          var similarGames = []
          for (var i=0; i<game.similarGames?.length; i++) {
            var similarGame = this.gamesService.getGame(game.similarGames[i].toString())
            if (similarGame) {
              similarGames.push(similarGame)
            }
          }
          this.recommended = similarGames
        }
      }))
      this.subscription.add(observerService.getMessage().subscribe(message => {
        this.appData = message;
      }));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
  updateObserver() {
    this.observerService.sendMessage(this.appData);
  }

  openGame(game: Game) {
    this.appData.navbarPage = NavbarPage.game;
    this.gamesService.setGame(game);
    this.updateObserver();
    this.router.navigate(['/game'], {queryParams: {id: game.id}});
  }
}
