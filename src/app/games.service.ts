import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeType } from '@angular/fire/firestore';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
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

  constructor(private firestore: AngularFirestore) {
    this.gamesCollection = firestore.collection('GameList');
    this.gamesCollection.snapshotChanges().subscribe(changes => {
      changes.map(change => {
        if (change.type === 'added') {
          if (change.payload.doc.data().coverURL as string) {
            this.subject.next(this.subject.value.concat(change.payload.doc.data() as Game));
          }
        } else if (change.type === 'modified') {
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
