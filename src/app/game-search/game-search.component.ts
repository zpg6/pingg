import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppData } from '../app-data';
import { GamesService } from '../games.service';
import { MiniGame } from '../mini-game';
import { ObserverService } from '../observer.service';

@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html',
  styleUrls: ['./game-search.component.css']
})
export class GameSearchComponent implements OnInit {

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
    this.router.navigate(['/games/'+game.id]);
  }

}
