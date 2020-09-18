import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { Game } from './game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private subject = new BehaviorSubject<Array<any>>(new Array<any>());

  games: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    this.games = firestore.collection('GameList').valueChanges();
  }

  sendMessage(message: Array<any>) {
    this.subject.next(message);
  }

  clearMessage() {
      this.subject.next(new Array<any>());
  }


  getMessage(): Observable<Array<any>> {
      return this.subject.asObservable();
  }

  getMessageOnce(): Array<any> {
      return this.subject.value
  }
}
