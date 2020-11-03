import { Component, Input, OnInit } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-post-cell',
  templateUrl: './post-cell.component.html',
  styleUrls: ['./post-cell.component.css']
})
export class PostCellComponent implements OnInit {



  votes = 0;
  voted = false;
  rand;
  @Input('post') post;

  constructor() {
    this.rand = Math.round(Math.random() * 1000)
  }

  ngOnInit(): void {

  }

  vote() {
    if (this.voted) {
      if (this.votes > 0) this.votes--;
    } else {
      this.votes++;
    }
    this.voted = !this.voted
  }

  gameName() {
    if (this.post?.game?.name) {
      if (this.post?.game?.name.length > 15) {
        return this.post?.game?.name.slice(0,15) + '...'
      } else {
        return this.post?.game?.name
      }
    }
  }

}
