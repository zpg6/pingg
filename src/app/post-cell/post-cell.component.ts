import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-cell',
  templateUrl: './post-cell.component.html',
  styleUrls: ['./post-cell.component.css']
})
export class PostCellComponent implements OnInit {

  rand;

  votes = 0;
  voted = false;

  constructor() {
    this.rand = Math.round(Math.random()*100+Math.random()*100);
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

}
