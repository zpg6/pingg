import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AppData } from '../app-data';
import { ObserverService } from '../observer.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

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

  ngOnInit() {

    var url = 'https://cs1530group11graph.uc.r.appspot.com/posts/'
    var valid = false
    if (this.gameID) {
      url += this.gameID
      valid = true
    }
    // else if (this.userID) {
    //   url += ''
    //   valid = true
    // }
    // else if (this.main) {
    //   url += ''
    //   valid = true
    // }
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

  newPost() {
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
