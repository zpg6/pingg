import { HttpClient } from '@angular/common/http';
import { ApplicationRef, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { app } from 'firebase';
import { AppData } from '../app-data';
import { GamesService } from '../games.service';
import { ObserverService } from '../observer.service';
import { PostsService } from '../posts.service';
import { ProfileService } from '../profile.service';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.css']
})
export class ProfileContainerComponent implements OnInit {

  ticks = 0;
  @ViewChild('scrollable') scrollable: ElementRef;
  user;
  posts;
  games;
  example = 'Here is some text as the contents of this post. Here is some text as the contents of this post. Here is some text as the contents of this post. Here is some text as the contents of this post. Here is some text as the contents of this post. Here is some text as the contents of this post.'
  followers = []
  following = []

  usersOwnProfile
  loaded = 0;
  appData: AppData
  isFollowedLocally

  seeded = [false,false,false,false,false]

  public lottieConfig: Object = {
    path: 'assets/lottie-files/greenCircleExpanding.json',
    renderer: 'canvas',
    autoplay: true,
    loop: true
  };

  constructor(private observerService: ObserverService,
              private gamesService: GamesService,
              private ar: ActivatedRoute,
              private http: HttpClient,
              private router: Router,
              private postsService: PostsService,
              private profileService: ProfileService)

  {
    this.observerService.getMessage().subscribe(msg => {
      this.appData = msg
      if (!this.appData?.isOnboarded && msg.isOnboarded) {
        this.router.navigate(['/feed'])
      }
    })
    this.posts = undefined
  }

  ngOnInit(): void {
    console.log('hit')
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
          return;
      }
      this.scrollToTop()
      this.seeded = [false,false,false,false,false]
    });
    this.ar.url.subscribe(url => {
      this.seeded = [false,false,false,false,false]
      let id = url[url.length - 1].path.toString()
      let profile = this.observerService.getMessageOnce().profile
      if (id === profile.id) {
        this.user = profile
        this.setupPage(profile.id)
        this.usersOwnProfile = true
      } else {
        this.usersOwnProfile = false
        let url = 'https://cs1530group11graph.uc.r.appspot.com/user/' + id
        this.http.get<any>(url).toPromise().then(profileObj => {
          var data = profileObj.response.properties
          if (data) {
            this.user = data
            this.setupPage(data.id)
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

  getFollowers() {
    if (this.usersOwnProfile)
      return this.followers.filter(obj => obj.id !== this.appData.profile.id)
    return this.followers
  }

  getFollowing() {
    if (this.usersOwnProfile)
      return this.following.filter(obj => obj.id !== this.appData.profile.id)
    return this.following
  }

  doesFollow() {
    if (this.usersOwnProfile == undefined) return
    return !this.usersOwnProfile && this.followers.find(user => { return user.id === this.appData.profile.id }) !== undefined
  }

  changeFollow() {
    if (this.usersOwnProfile) {
      return
    }
    let prev = this.doesFollow()
    if (prev) {
      this.unfollowUser()
    } else {
      this.followUser()
    }
  }

  followUser() {
    let url = 'https://cs1530group11graph.uc.r.appspot.com/users/' + this.appData.profile.id + '/followed-user/' + this.user.id
    console.log('follow url = '+url)
    this.http.get<any>(url).toPromise()
              .then(response => {
                console.log(response)
                if (response.response === 'Success!') {
                  if (!this.followers.find(usr => this.user.id === usr.id)) {
                    this.followers.push({
                      id: this.appData.profile.id,
                      avatarVal: this.appData.profile.avatarVal,
                      handle: this.appData.profile.handle,
                    })
                  }
                }
              })
              .catch(err => console.error(err))
  }

  unfollowUser() {

    let url = 'https://cs1530group11graph.uc.r.appspot.com/users/' + this.appData.profile.id + '/unfollowed-user/' + this.user.id
    console.log('unfollow url = '+url)
    this.http.get<any>(url).toPromise()
              .then(response => {
                console.log(response)
                if (response.response === 'Success!') {
                  this.followers = this.followers.filter(follower => {
                    return follower.id !== this.appData.profile.id
                  })
                }
              })
              .catch(err => console.error(err))
  }

  editProfile() {
    var appData = this.observerService.getMessageOnce()

    appData.onboardingBasicsValid = true
    appData.onboardingScreenNamesValid = true
    appData.onboardingTempProfile = appData.profile
    appData.isOnboarded = false

    this.observerService.sendMessage(appData)
  }

  setupPage(userID: string) {
    if ((this.seeded[0] || this.seeded[1] || this.seeded[2] || this.seeded[3] || this.seeded[4]))
      return
    this.postsService.getUserPosts(userID)
      .then(response => {
        console.log('✅')
        this.posts = response.response
        this.seeded[0] = true
      })
      .catch(err => { console.error(err) })

      this.fillInScreenNames()

    this.profileService.getFollowers(userID)
      .then(response => {
        this.followers = response.response
        this.seeded[1] = true
      })
      .catch(err => { console.error(err) })

    this.profileService.getFollowing(userID)
      .then(response => {
        this.following = response.response
        this.seeded[2] = true
      })
      .catch(err => { console.error(err) })

    this.profileService.getGames(userID)
      .then(response => {
        console.log(response)
        this.games = response.response
        this.seeded[3] = true
      })
      .catch(err => { console.error(err) })
  }

  scrollToTop() {
    this.scrollable.nativeElement.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  screenNamesIsArray() {
    return Array.isArray(this.user?.screenNames)
  }

  isJson(str): boolean {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
  }

  fillInScreenNames() {
    var attempt = this.isJson(this.user?.screenNames)
    if (attempt && attempt !== undefined) {
      console.log(JSON.parse(this.user.screenNames))
      this.user.screenNames = JSON.parse(this.user.screenNames)
      if (this.user.screenNames?.games && this.user.screenNames?.games.length > 0) {
        this.user.screenNames?.games?.forEach(game => {
          this.gamesService.getGame(game.id)
            .then(gameObj => {
              this.user.screenNames?.games?.forEach((game,index) => {
                if (game.id === gameObj.id) {
                  this.user.screenNames.games[index] = gameObj
                }
              })
            })
            .catch(err => console.error(err))
        })
      }
    }

    else if (Array.isArray(this.user?.screenNames)) {

      var i = 0
      for (i = 0; i < this.user.screenNames.length; i++) {
        if (typeof this.user.screenNames[i] === 'string') {
          this.user.screenNames[i] = JSON.parse(this.user.screenNames[i])
        }

        //this.user.screenNames[i].games = this.gamesService.getSet('Top Rated').slice(0,7)
      }

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
    this.seeded[4] = true
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

  animationCreated(animationItem: AnimationItem): void {
  }

  options: AnimationOptions = {
    path: '/assets/lottie-files/greenCircleExpanding.json',
  };


}
