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

  sections: Set<string> = new Set<string>(['Top Rated','Most Rated'])
  appData: AppData;
  appDataSubscription = new Subscription();

  constructor(private gamesService: GamesService, private observerService: ObserverService,
              private router: Router, private http: HttpClient)
  {
      for (const genre in Genre) {
        this.sections.add(genre)
      }

  }



  ngOnInit() {
    this.appDataSubscription.add(this.observerService.getMessage().subscribe(message => {
      this.appData = message;
    }));
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.appDataSubscription.unsubscribe();
  }

  updateObserver() {
    this.observerService.sendMessage(this.appData);
  }


  getFrom(set: string) {
    return this.gamesService.getSet(set)
  }

}
