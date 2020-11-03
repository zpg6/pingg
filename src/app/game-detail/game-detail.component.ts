import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AppData } from '../app-data';
import { Game } from '../game';
import { MiniGame } from '../mini-game';
import { GamesService } from '../games.service';
import { NavbarPage } from '../navbar-page.enum';
import { ObserverService } from '../observer.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  game: any;
  recommended: any[];
  appData: AppData

  followButtonCount = 0;
  lastFollow: Date;

  isFollowedLocally;

  constructor(private observerService: ObserverService, private gamesService: GamesService, private ar: ActivatedRoute, private http: HttpClient) {
      // subscribe to home component messages
    this.observerService.getMessage().subscribe(msg => this.appData = msg)
  }

  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
    this.ar.url.subscribe(url => {
      let id = url[url.length - 1]
      this.gamesService.getGame(id.path.toString()).then(game => {
        this.game = game
        this.recommended = []
        this.doesFollow()
        this.game.similarGames.forEach(similar => {
          this.gamesService.getGame(similar).then(recGame => {
            if (recGame) {
              this.recommended.push(recGame)
            }
          })
        })
      })
    })
  }

  rateGame() {
    this.appData.gameBeingRated = this.game
    this.appData.rateGameModalOpen = true
    this.observerService.sendMessage(this.appData)
  }

  doesFollow() {
    let url = 'https://cs1530group11.uc.appspot.com/users/' + this.appData.profile.id + '/games-followed/'
      let body = { gameID: this.game.id }
      this.http.post<any>(url, body).toPromise()
               .then(response => {
                  console.log(response)
                  if (response.response.properties) {
                    if (response.response.properties.includes(this.game.id)) {
                      this.isFollowedLocally = true
                    }
                  }
               })
               .catch(err => console.error(err))
  }

  changeFollow() {
    let prev = this.isFollowedLocally
    this.isFollowedLocally = !this.isFollowedLocally
    if (prev) {
      this.unFollowGame()
    } else {
      this.followGame()
    }
  }

  followGame() {
    let now = new Date().getSeconds()
    let then = this.lastFollow.getSeconds()
    let diff = now - then
    if (!this.lastFollow || this.followButtonCount < 5 || diff > 2) {
      if (diff > 2) {this.followButtonCount = 0}
      this.followButtonCount++
      this.lastFollow = new Date()
      let url = 'https://cs1530group11.uc.appspot.com/users/' + this.appData.profile.id + '/followed-game/'
      let body = { gameID: this.game.id }
      this.http.post<any>(url, body).toPromise()
               .then(response => {
                  console.log(response)
                  if (response.response == 'Success!') {
                    //this.isFollowedLocally = true
                  }
               })
               .catch(err => console.error(err))
    }
  }

  unFollowGame() {

    let url = 'https://cs1530group11.uc.appspot.com/users/' + this.appData.profile.id + '/unfollowed-game/'
    let body = { gameID: this.game.id }
    this.http.post<any>(url, body).toPromise()
              .then(response => {
                console.log(response)
                if (response.response == 'Success!') {
                  //this.isFollowedLocally = false
                }
              })
              .catch(err => console.error(err))
  }
}
