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
        this.getGames()
        this.getFollowers()
        this.getFollowing()
        let gamesFiller = this.gamesService.getSet('Most Rated')
        var i = 0, max = gamesFiller.length
        for (i = 0; i<max; i++) {
          console.log(i)
          let index = Math.round(Math.random()*max)
          this.posts.push({
            id: i,
            user: this.user,
            game: gamesFiller[index],
            text: this.example,
            time: new Date(),
          })
        }
      } else {
        let url = 'https://cs1530group11graph.uc.r.appspot.com/user/' + id
        this.http.get<any>(url).toPromise().then(profileObj => {
          var data = profileObj.response.properties
          if (data) {
            this.user = data
            this.getGames()
            this.getFollowers()
            this.getFollowing()
            let gamesFiller = this.gamesService.getSet('Most Rated')
            var i = 0, max = gamesFiller.length
            for (i = 0; i<max; i++) {
              console.log(i)
              let index = Math.round(Math.random()*max)
              this.posts.push({
                id: i,
                user: this.user,
                game: gamesFiller[index],
                text: this.example,
                time: new Date(),
              })
            }

          }
          else {
            this.router.navigate(['/profile/'+profile.id])
          }
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

  getGames() {
    let url = 'https://cs1530group11graph.uc.r.appspot.com/users/' + this.user.id + '/games-followed/'
    this.http.get<any>(url).toPromise()
              .then(response => {
                console.log(response)
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

}
