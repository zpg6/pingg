import { Component, OnDestroy, OnInit } from '@angular/core';

import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Subject } from 'rxjs';
import { switchMap, filter, map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '\@angular/fire/firestore'
import { GamesService } from '../games.service';
import { Game } from '../game';
import { MiniGame } from '../mini-game';
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
  results: Array<MiniGame> = new Array<MiniGame>();
  subscription = new Subscription();
  subscriptionResults = new Subscription();

  constructor(private gamesService: GamesService, private observerService: ObserverService, private router: Router) {
    this.subscriptionResults.add(this.gamesService.searchResults.asObservable().subscribe(results => {
      this.results = results;
    }));
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
    this.subscriptionResults.unsubscribe();
  }
  updateObserver() {
    this.observerService.sendMessage(this.appData);
  }

  onkeyup(e) {
    this.gamesService.search(e.target.value.toLowerCase());
  }

  closeModal() {
    this.appData.searchBarOpen = false;
    this.updateObserver();
  }

  openGame(game: MiniGame) {
    //this.gamesService.setGameID(game.id.toString());
    this.appData.searchBarOpen = false;
    this.updateObserver();
    this.router.navigate(['/game'+game.id]);
  }

}
