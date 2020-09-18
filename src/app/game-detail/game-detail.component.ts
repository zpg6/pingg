import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../game';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  constructor(private ar: ActivatedRoute) {
    console.log(ar.queryParamMap);
    console.log(ar.queryParams);
    console.log(ar.queryParams['id']);
  }

  ngOnInit(): void {
  }

  game;

}
