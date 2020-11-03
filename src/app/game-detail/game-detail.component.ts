import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AppData } from '../app-data';
import { Game } from '../game';
import { MiniGame } from '../mini-game';
import { GamesService } from '../games.service';
import { NavbarPage } from '../navbar-page.enum';
import { ObserverService } from '../observer.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  game: any;
  recommended: any[];

  constructor(private observerService: ObserverService, private gamesService: GamesService, private ar: ActivatedRoute) {
      // subscribe to home component messages

  }

  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
    this.ar.url.subscribe(url => {
      let id = url[url.length - 1]
      this.gamesService.getGame(id.path.toString()).then(game => {
        this.game = game
        this.recommended = []
        this.game.similarGames.forEach(similar => {
          this.gamesService.getGame(similar).then(recGame => {
            if (recGame) {
              this.recommended.push(recGame)
            }
          })
        })
      })
    })
  }
}
