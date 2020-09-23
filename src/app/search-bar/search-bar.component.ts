import { Component, OnDestroy, OnInit } from '@angular/core';

import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Subject } from 'rxjs';
import { switchMap, filter, map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '\@angular/fire/firestore'
import { GamesService } from '../games.service';
import { Game } from '../game';
import { ObserverService } from '../observer.service';
import { AppData } from '../app-data';
import { NavbarPage } from '../navbar-page.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit, OnDestroy {

  appData: AppData;
  subscription = new Subscription();

  constructor(private gamesService: GamesService, private observerService: ObserverService, private router: Router) {
    this.subscription.add(observerService.getMessage().subscribe(message => {
      this.appData = message;
      console.log('Subscription updated @ ReportIssueComponent')
    }));
    console.log('Subscription created @ ReportIssueComponent')
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



  results: Array<Game> = new Array<Game>();

  onkeyup(e) {
    this.results = this.gamesService.search(e.target.value.toLowerCase());
  }

  closeModal() {
    this.appData.searchBarOpen = false;
    this.updateObserver();
  }

  openGame(game: Game) {
    this.appData.navbarPage = NavbarPage.game;
    this.gamesService.setGame(game);
    this.appData.searchBarOpen = false;
    this.updateObserver();
    this.router.navigate(['/game'], {queryParams: {id: game.id}});
  }

}
