import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { Genre } from '../genre.enum';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-browse-genres',
  templateUrl: './browse-genres.component.html',
  styleUrls: ['./browse-genres.component.css']
})
export class BrowseGenresComponent implements OnInit {

  games: Array<Game>;
  genres: Array<Genre>;

  constructor(private gamesService: GamesService) {

  }



  ngOnInit(): void {
  }

}
