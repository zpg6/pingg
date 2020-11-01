import { Component, Input, OnInit } from '@angular/core';
import { MiniGame } from '../mini-game';

@Component({
  selector: 'app-card-grid-container',
  templateUrl: './card-grid-container.component.html',
  styleUrls: ['./card-grid-container.component.css']
})
export class CardGridContainerComponent implements OnInit {

  @Input('list') list: MiniGame[];

  constructor() { }

  ngOnInit(): void {
  }

}
