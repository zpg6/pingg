import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Game } from './game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  games: Observable<Game[]>;
  gamesCollection: AngularFirestoreCollection;
  snapshot: any;

  constructor(private firestore: AngularFirestore) {
    this.gamesCollection = firestore.collection('GameList');
    this.snapshot = this.gamesCollection.snapshotChanges()
                    .pipe(
                      map(arr => arr.map(a => {
                        const data = a.payload.doc.data() as Game;
                        return data;
                      }))
                    )
  }

  getGames() {
    return new Promise<Array<Game>>((resolve,reject) => {
      this.gamesCollection.snapshotChanges()
        .subscribe(snapshots=>{
          resolve(snapshots.map(game => {
            return game.payload.doc.data() as Game;
          }));
        })
    })
  }
}
