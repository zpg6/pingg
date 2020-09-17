import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-card-list',
  templateUrl: './game-card-list.component.html',
  styleUrls: ['./game-card-list.component.css']
})
export class GameCardListComponent implements OnInit {

  constructor() { }

  list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

  ngOnInit(): void {
  }

}
