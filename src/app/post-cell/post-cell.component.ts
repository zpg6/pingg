import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AppData } from '../app-data';
import { GamesService } from '../games.service';
import { ObserverService } from '../observer.service';

@Component({
  selector: 'app-post-cell',
  templateUrl: './post-cell.component.html',
  styleUrls: ['./post-cell.component.css']
})
export class PostCellComponent implements OnInit {

  voted = false;
  @Input('post') post;
  appData: AppData

  constructor(private observerService: ObserverService, private http: HttpClient) {
    this.observerService.getMessage().subscribe(msg => this.appData = msg)
  }

  ngOnInit(): void {

  }

  vote() {
    if (this.voted) {
      if (this.post.numUpvotes > 0) this.post.numUpvotes--;
      let url = 'https://cs1530group11graph.uc.r.appspot.com/users/' + this.appData.profile.id + '/upvoted-post'
      let body = { postID: this.post.id }
      this.http.post<any>(url, body).toPromise()
                .then(response => {
                  console.log(response)
                  if (response.response == 'Success!') {
                    //this.isFollowedLocally = true
                  }
                })
                .catch(err => console.error(err))
    } else {
      this.post.numUpvotes++;
      let url = 'https://cs1530group11graph.uc.r.appspot.com/users/' + this.appData.profile.id + '/downvoted-post'
      let body = { postID: this.post.id }
      this.http.post<any>(url, body).toPromise()
                .then(response => {
                  console.log(response)
                  if (response.response == 'Success!') {
                    //this.isFollowedLocally = true
                  }
                })
                .catch(err => console.error(err))
    }
    this.voted = !this.voted
  }

  gameName() {
    if (this.post?.game?.name) {
      if (this.post?.game?.name.length > 15) {
        return this.post?.game?.name.slice(0,15) + '...'
      } else {
        return this.post?.game?.name
      }
    }
  }

}
