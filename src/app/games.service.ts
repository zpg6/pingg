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
  private subject = new BehaviorSubject<Array<Game>>(new Array<Game>());
  private detailing = new BehaviorSubject<Game>(new Game());
  private subscription: Subscription;
  private httpClient: HttpClient;

  constructor(private firestore: AngularFirestore, private storage: AngularFireStorage, private http: HttpClient) {

    this.httpClient = http;
    const databaseJSONRef = storage.ref('database/database.json');
    var databaseURL = databaseJSONRef.getDownloadURL().subscribe(url => {
      this.httpClient.get(url).toPromise().then(response => {
        if (response) {
          var arr = response as Array<any>
          this.subject.next(arr.map(game => {
            return JSON.parse(game) as Game
          }))
        }
      }).catch( err => {
        console.error(err);
      })
    })

    this.gamesCollection = firestore.collection('GameList');
    this.gamesCollection.snapshotChanges().subscribe(changes => {
      changes.map(change => {
        if (change.type === 'modified') {
          let copy = this.subject.value
          copy.forEach(function (game,index) {
            let modified = change.payload.doc.data() as Game;
            if (game.id === modified.id) {
              copy[index] = modified;
            }
          })
          this.subject.next(copy);
        } else if (change.type === 'removed') {
          this.subject.next(this.subject.value.filter(game => {
            return (game.id.toString() !== change.payload.doc.id)
          }))
        }
      })
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

  search(query: string): Array<Game> {
    return this.subject.value.filter(game => {
      return game.searchableIndex[query]
    }).sort((a,b) =>  {
      if (a.rating > b.rating) {
        return -1
      }
      if (a.rating < b.rating) {
        return 1
      }
      return 0;
    }).slice(0,5);
  }

  // getGame(id: string): Observable<Game> {
  //   console.log(`Looking for game with id = ${id}`);
  //   this.subject.value.forEach(game => {
  //     if (`${game.id}` === id) {
  //       console.log('found game in loop')
  //       this.detailing.next(game);
  //     }
  //   })
  //   return this.observeGame();
  // }
}
