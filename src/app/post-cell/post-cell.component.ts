import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-cell',
  templateUrl: './post-cell.component.html',
  styleUrls: ['./post-cell.component.css']
})
export class PostCellComponent implements OnInit {

  rand;

  constructor() {
    this.rand = Math.round(Math.random()*100);
   }

  ngOnInit(): void {
  }

}
