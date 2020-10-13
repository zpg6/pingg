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

  private gamesCollection: AngularFirestoreCollection;
  private subject = new BehaviorSubject<Map<string, Game>>(new Map<string, Game>());
  private miniSubject = new BehaviorSubject<Map<string, MiniGame>>(new Map<string, MiniGame>())
  private subjectArray = new BehaviorSubject<Array<Game>>(new Array<Game>())
  private miniSubjectArray = new BehaviorSubject<Array<MiniGame>>(new Array<MiniGame>())
  private detailing = new BehaviorSubject<Game>(new Game());
  private searchResults = new BehaviorSubject<Array<MiniGame>>(new Array<MiniGame>());
  private subscription: Subscription;
  private httpClient: HttpClient;
  private serverURL = "https://smapi.ngrok.io"

  constructor(private firestore: AngularFirestore, private storage: AngularFireStorage, private http: HttpClient) {
    console.log("games service constructed")

    this.httpClient = http;

    this.httpClient.get(this.serverURL + '/mini-game-database').toPromise().then(response => {
      var map = response as Map<string, Game>
      this.miniSubject.next(map);
      var array = [];
      for (const key in map) {
        array.push(map[key]);
      }
      this.miniSubjectArray.next(array.slice(0,7));
    })
    .catch(err => {
      console.error(err);
    })
  }

  getGames() {
    return this.subject.asObservable();
    // return new Promise<Array<Game>>((resolve,reject) => {
    //   this.gamesCollection.snapshotChanges()
    //     .subscribe(snapshots=>{
    //       resolve(snapshots.map(game => {
    //         return game.payload.doc.data() as Game;
    //       }));
    //     })
    // })
  }

  observeGame(): Observable<Game> {
    return this.detailing.asObservable();
  }

  setGameID(id: string) {
    this.detailing.next(null);
    if (!id || id.length == 0) { return }
    var body: {} = {'id':id}
    this.http.post(this.serverURL + '/game/querybyid', body).toPromise().then(game =>{
      this.detailing.next(game as Game);
    })
  }

  getResults(): Observable<Array<MiniGame>> {
    return this.searchResults.asObservable();
  }

  getGame(id: string): Game {
    var found = this.subject.value[id]
    return found
  }

  search(query: string) {

    this.searchResults.next(this.miniSubjectArray.value.filter(game => {
      return game.searchableIndex[query]
    }).sort((a,b) =>  {
      if (a.rating > b.rating) {
        return -1
      }
      if (a.rating < b.rating) {
        return 1
      }
      return 0;
    }).slice(0,5));
  }

  getAll(): Observable<Array<Game>> {
    return this.subjectArray.asObservable()
  }

  getAllMiniGames(): Observable<Array<MiniGame>> {
    return this.miniSubjectArray.asObservable()
  }

  getMiniGame(id: string): MiniGame {
    return this.miniSubject.value[id];
  }
}
