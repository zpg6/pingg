import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { switchMap, filter, map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '\@angular/fire/firestore'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  results: Observable<any[]>;

  offset = new Subject<string>();

  constructor(private afs: AngularFirestore) { }

  onkeyup(e) {
    this.offset.next(e.target.value.toLowerCase())
  }

  search() {
    return this.offset.pipe(
      filter(val => !!val),
      switchMap(offset => {
        return this.afs.collection('GameList', ref =>
          ref.orderBy(`searchableIndex.${offset}`).limit(5)
        )
        .valueChanges()
      })
    )
  }

  ngOnInit() {
    this.results = this.search();
  }

}
