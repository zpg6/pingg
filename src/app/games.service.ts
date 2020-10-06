import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeType } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Game } from './game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private gamesCollection: AngularFirestoreCollection;
  private subject = new BehaviorSubject<Map<string, Game>>(new Map<string, Game>());
  private subjectArray = new BehaviorSubject<Array<Game>>(new Array<Game>())
  private detailing = new BehaviorSubject<Game>(new Game());
  private searchResults = new BehaviorSubject<Array<Game>>(new Array<Game>());
  private subscription: Subscription;
  private httpClient: HttpClient;
  private serverURL = "https://smapi.ngrok.io"

  constructor(private firestore: AngularFirestore, private storage: AngularFireStorage, private http: HttpClient) {
    console.log("games service constructed")

    this.httpClient = http;

    this.httpClient.get(this.serverURL + '/database').toPromise().then(response => {
      var map = response as Map<string, Game>
      this.subject.next(map);
      var array = [];
      for (const key in map) {
        array.push(map[key]);
      }
      this.subjectArray.next(array);
      console.log(this.subjectArray.value)
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

  setGame(game: Game) {
    this.detailing.next(game);
  }

  setGameID(id: string) {
    if (!id || id.length == 0) { return }
    this.subscription = this.firestore.collection('GameList').doc(id).snapshotChanges().subscribe(change => {
      console.log(`updating game ${change.payload.id}`)
      if (change.type === 'added' || change.type === 'modified' || change.type === 'value') {
        this.detailing.next(change.payload.data() as Game);
      } else if (change.type === 'removed') {
        this.detailing.next(new Game());
      }
    })
  }

  getResults(): Observable<Array<Game>> {
    return this.searchResults.asObservable();
  }

  getGame(id: string): Game {
    var found = this.subject.value[id]
    return found
  }

  search(query: string) {

    this.searchResults.next(this.subject.value.values.prototype.filter(game => {
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
}
