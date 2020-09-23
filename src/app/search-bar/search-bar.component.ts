import { Component, OnInit } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { switchMap, filter, map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '\@angular/fire/firestore'
import { GamesService } from '../games.service';
import { Game } from '../game';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  results = new BehaviorSubject(Array<Game>());

  constructor(private gamesService: GamesService) { }

  onkeyup(e) {
    this.results.next(this.gamesService.search(e.target.value.toLowerCase()));
  }

}
