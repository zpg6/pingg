import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AppData } from '../app-data';
import { ObserverService } from '../observer.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnChanges {

  @Input('main') main: boolean;
  @Input('gameID') gameID: any;
  @Input('userID') userID: any;
  appData: AppData;
  posts: any[] = [];

  constructor(private observerService: ObserverService, private http: HttpClient) {
      // subscribe to home component messages
      observerService.getMessage().subscribe(message => {
        this.appData = message;
      });
  }

  previousValue = {
    userID: undefined,
    main: undefined,
    gameID: undefined
  };

  ngOnChanges(changes) {

    // if (changes?.userID?.currentValue && this.previousValue?.userID !== changes.userID.currentValue) {
    //   this.previousValue.userID = this.userID
    //   this.userID = changes.userID.currentValue
    //   this.gameID = undefined
    //   this.main = undefined
    //   this.adjustFeedToUser(this.userID)
    // }

    // else if (changes?.main?.currentValue && this.previousValue?.main !== changes.main.currentValue) {
    //   this.previousValue.main = this.main
    //   this.main = changes.main.currentValue
    //   this.userID = undefined
    //   this.gameID = undefined
    //   this.adjustFeedToMain()
    // }

    // else if (changes?.gameID?.currentValue && this.previousValue?.gameID !== changes.gameID.currentValue) {
    //   this.previousValue.gameID = this.gameID
    //   this.gameID = changes.gameID.currentValue
    //   this.userID = undefined
    //   this.main = undefined
    //   this.adjustFeedToGame(this.gameID)
    // }

    this.setupFeed()

  }

  ngOnInit() {

    this.setupFeed()

  }

  setupFeed() {
    var url = 'https://cs1530group11graph.uc.r.appspot.com/posts/'
    var valid = false
    if (this.gameID) {
      url += ('game/'+this.gameID)
      valid = true
    }
    else if (this.userID) {
      url += ('user/'+this.userID)
      valid = true
    }
    else if (this.main) {
      valid = true
    }
    if (valid) {
      this.http.get<any>(url)
        .toPromise()
        .then(response => {
          console.table(response.response)
          this.posts = response.response
        })
        .catch(err => {
          console.error(err)
        })
    }
  }

  adjustFeedToUser(newUserID: string) {
    if (newUserID && newUserID.length > 0) {
      var url = 'https://cs1530group11graph.uc.r.appspot.com/posts/user/' + newUserID
      this.http.get<any>(url)
          .toPromise()
          .then(response => {
            console.table(response.response)
            this.posts = response.response
          })
          .catch(err => {
            console.error(err)
          })
    }
  }

  adjustFeedToGame(gameID: string) {
    if (gameID && gameID.length > 0) {
      var url = 'https://cs1530group11graph.uc.r.appspot.com/posts/game/' + gameID
      this.http.get<any>(url)
          .toPromise()
          .then(response => {
            console.table(response.response)
            this.posts = response.response
          })
          .catch(err => {
            console.error(err)
          })
    }
  }

  adjustFeedToMain() {
    var url = 'https://cs1530group11graph.uc.r.appspot.com/posts/'
    this.http.get<any>(url)
        .toPromise()
        .then(response => {
          console.table(response.response)
          this.posts = response.response
        })
        .catch(err => {
          console.error(err)
        })
  }

  newPost() {
    if (this.gameID) {
      this.appData.postGameLock = this.gameID
    }
    this.appData.newPostModalOpen = true
    this.updateObserver()
  }

  updateObserver() {
    this.observerService.sendMessage(this.appData);
  }

  emptyMessage() {
    if (this.gameID) {
      return '🙁 No posts for this game just yet...'
    }
    else if (this.userID) {
      if (this.userID === this.appData.profile.id) {
        return `🙁 You haven't posted anything just yet...`
      }
      else {
        return '🙁 No posts for this user just yet...'
      }
    }
    else if (this.main) {
      return '🙁 No posts in the main feed...'
    }
  }

}
