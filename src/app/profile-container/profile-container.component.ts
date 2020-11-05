import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { GamesService } from '../games.service';
import { ObserverService } from '../observer.service';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.css']
})
export class ProfileContainerComponent implements OnInit {

  @ViewChild('scrollable') scrollable: ElementRef;
  user;
  posts = [];
  games;
  example = 'Here is some text as the contents of this post. Here is some text as the contents of this post. Here is some text as the contents of this post. Here is some text as the contents of this post. Here is some text as the contents of this post. Here is some text as the contents of this post.'
  followers = []
  following = []

  loaded = 0;

  usersOwnProfile = false

  constructor(private observerService: ObserverService, private gamesService: GamesService, private ar: ActivatedRoute, private http: HttpClient, private router: Router) {
    this.observerService.getMessage().subscribe(msg => this.user = msg.profile)
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
          return;
      }
      this.scrollToTop()
    });
    this.ar.url.subscribe(url => {
      let id = url[url.length - 1].path.toString()
      let profile = this.observerService.getMessageOnce().profile
      if (id === profile.id) {
        this.user = profile
        this.usersOwnProfile = true
        this.fillInScreenNames()
        this.getFollowers()
        this.getFollowing()
        this.getGames()
        this.getPosts()
      } else {
        this.usersOwnProfile = false
        let url = 'https://cs1530group11graph.uc.r.appspot.com/user/' + id
        this.http.get<any>(url).toPromise().then(profileObj => {
          var data = profileObj.response.properties
          if (data) {
            this.user = data
            this.fillInScreenNames()
            this.getFollowers()
            this.getFollowing()
            this.getGames()
            this.getPosts()
          }
          else {
            this.router.navigate(['/profile/'+profile.id])
          }
        }).catch(err => {
          console.error(err)
          this.router.navigate(['/profile/'+profile.id])
        })
      }
    })
  }

  scrollToTop() {
    this.scrollable.nativeElement.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  fillInScreenNames() {

    if (this.user.screenNames) {

      var i = 0
      for (i = 0; i < this.user.screenNames.length; i++) {
        if (typeof this.user.screenNames[i] === 'string') {
          this.user.screenNames[i] = JSON.parse(this.user.screenNames[i])
        }

        //this.user.screenNames[i].games = this.gamesService.getSet('Top Rated').slice(0,7)
      }

      console.log(this.user.screenNames)

      this.user.screenNames.forEach(name => {
        if (name && name.games && name.games.length > 0) {
          name.games.forEach(game => {
            this.gamesService.getGame(game.id)
              .then(gameObj => {
                this.addGame(name.id, gameObj)
              })
              .catch(err => console.error(err))
          })
        }
      })
    }
  }

  addGame(nameID: number, game: any) {
    if (!this.user || !this.user.screenNames) return
    var i = 0
    for (i = 0; i < this.user.screenNames.length; i++) {
      if (this.user.screenNames[i].id === nameID) {
        if(this.user.screenNames[i].games) {
          var j = 0
          for (j = 0; j < this.user.screenNames[i].games.length; j++) {
            if (this.user.screenNames[i].games[j].id === game.id) {
              this.user.screenNames[i].games[j] = game
              return
            }
          }
        }
        return
      }
    }
  }

  getGames() {
    let url = 'https://cs1530group11graph.uc.r.appspot.com/users/' + this.user.id + '/games-followed/'
    this.http.get<any>(url).toPromise()
              .then(response => {
                this.games = response.response
              })
              .catch(err => console.error(err))
  }

  getFollowers() {

    let url = 'https://cs1530group11graph.uc.r.appspot.com/users/' + this.user.id + '/followers'
    this.http.get<any>(url).toPromise()
              .then(response => {
                console.log(response)
                this.followers = response.response
              })
              .catch(err => console.error(err))

  }

  getFollowing() {

    let url = 'https://cs1530group11graph.uc.r.appspot.com/users/' + this.user.id + '/following'
    this.http.get<any>(url).toPromise()
              .then(response => {
                console.log(response)
                this.following = response.response
              })
              .catch(err => console.error(err))

  }

  getPosts() {
    //let url = 'https://cs1530group11graph.uc.r.appspot.com/users/' + this.user.id + '/following'
  }

}
