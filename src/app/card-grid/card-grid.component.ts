import { Component, Input, OnInit } from '@angular/core';
import { MiniGame } from '../mini-game';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.css']
})
export class CardGridComponent implements OnInit {

  @Input('list') list: MiniGame[];

  col1: MiniGame[] = [];
  col2: MiniGame[] = [];
  col3: MiniGame[] = [];
  col4: MiniGame[] = [];
  col5: MiniGame[] = [];

  constructor() { }

  ngOnInit(): void {
    var count = 1;
    this.list.forEach(game => {
      switch (count) {
        case 1:
          this.col1.push(game)
          count++
          break;
        case 2:
          this.col2.push(game)
          count++
          break;
        case 3:
          this.col3.push(game)
          count++
          break;
        case 4:
          this.col4.push(game)
          count++
          break;
        case 5:
          this.col5.push(game)
          count = 1
          break;
        default:
          break;
      }
    })
  }

}
