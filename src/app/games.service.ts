import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeType } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { MiniGame } from './mini-game';
import { Game } from './game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private serverURL = "https://cs1530group11.uc.r.appspot.com/"
  dbMap;

  searchResults = new BehaviorSubject<MiniGame[]>([])
  gameNames = new BehaviorSubject<any[]>([])

  constructor(private http: HttpClient) {
    this.http.get(this.serverURL + 'genre-database')
          .toPromise()
          .then(db => {
            this.dbMap = db
          })
          .catch(err => {
            console.error(err)
          })
  }

  getSet(set: string) {
    return this.dbMap ? this.dbMap[set]:[]
  }

  getGame(id: string) {
    return new Promise( (resolve, reject) => {
      this.http.get(this.serverURL + 'game/id/'+id)
          .toPromise()
          .then(game => {
            resolve(game)
          })
          .catch(err => {
            reject(err)
          })
    })
  }

  search(term: string) {
    this.http.get<MiniGame[]>(this.serverURL + 'search/'+term)
            .toPromise()
            .then(games => {
              this.searchResults.next(games)
            })
            .catch(err => {
              console.error(err)
            })
  }

  getNames() {
    if (this.gameNames.value.length == 0) {
      this.http.get<any[]>(this.serverURL + 'game-names')
            .toPromise()
            .then(games => {
              this.gameNames.next(games)
            })
            .catch(err => {
              console.error(err)
            })
    }
  }


}

