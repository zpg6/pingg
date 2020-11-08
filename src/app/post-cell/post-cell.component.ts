import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AppData } from '../app-data';
import { GamesService } from '../games.service';
import { ObserverService } from '../observer.service';
import { v4 as uuidv4 } from 'uuid'

@Component({
  selector: 'app-post-cell',
  templateUrl: './post-cell.component.html',
  styleUrls: ['./post-cell.component.css']
})
export class PostCellComponent implements OnInit {

  voted = false;
  @Input('post') post;
  appData: AppData

  comments;
  loading = false;

  isCommenting = false
  commentError = ''
  @ViewChild('commentBoxD') commentBoxD: ElementRef
  @ViewChild('commentBoxM') commentBoxM: ElementRef

  constructor(private observerService: ObserverService, private http: HttpClient) {
    this.observerService.getMessage().subscribe(msg => this.appData = msg)
  }

  ngOnInit(): void {

    if (this.post && this.post?.id) {

      let url = 'https://cs1530group11graph.uc.r.appspot.com/posts/comments/' + this.post.id
      this.http.get<any>(url).toPromise()
                .then(response => {
                  console.log(response)
                  this.comments = response.response
                })
                .catch(err => console.error(err))
    }

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

  closeComment() {
    this.isCommenting = false
    if (this.commentBoxD && this.commentBoxD?.nativeElement?.value && this.commentBoxD?.nativeElement?.value?.length > 0){
      this.commentBoxD.nativeElement.value = ''
    }
    else if (this.commentBoxM && this.commentBoxM?.nativeElement?.value && this.commentBoxM?.nativeElement?.value?.length > 0) {
      this.commentBoxM.nativeElement.value = ''
    }
  }


  sendComment() {

    console.log(this.commentBoxM)
    console.log(this.commentBoxD)

    var commentD = false
    var commentM = false

    if (this.commentBoxD && this.commentBoxD?.nativeElement?.value && this.commentBoxD?.nativeElement?.value?.length > 0){
      commentD = true
    }
    else if (this.commentBoxM && this.commentBoxM?.nativeElement?.value && this.commentBoxM?.nativeElement?.value?.length > 0) {
      commentM = true
    }
    else {
      return
    }


    if (!this.post || !this.post?.id || !this.post?.game)
      return

    console.log('sending')

    this.loading = true
    let url = 'https://cs1530group11graph.uc.r.appspot.com/post/' + uuidv4()
    console.log(url)
    console.log(Date.now())
    var body = {
      user: {
        id: this.appData.profile.id,
        avatarVal: this.appData.profile.avatarVal,
        handle: this.appData.profile.handle
      },
      game: {
        id: this.post.game.id,
        coverURL: this.post.game.coverURL,
        rating: this.post.game.rating,
        name: this.post.game.name,
      },
      time: Date.now(),
      text: commentM ? this.commentBoxM.nativeElement.value:this.commentBoxD.nativeElement.value,
      isComment: 'yes',
      parentPostID: this.post.id
    }

    console.log(body)
    this.http.post<any>(url, body)
        .toPromise()
        .then(response => {
          console.log(response)
          this.loading = false
          this.isCommenting = false
          this.isCommenting = false
          commentM ? this.commentBoxM.nativeElement.value = '':this.commentBoxD.nativeElement.value = ''
        })
        .catch(err => {
          console.error(err)
          this.loading = false
          this.isCommenting = false
          commentM ? this.commentBoxM.nativeElement.value = '':this.commentBoxD.nativeElement.value = ''
        })
  }

}
