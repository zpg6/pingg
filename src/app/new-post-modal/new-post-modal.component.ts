import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppData } from '../app-data';
import { GamesService } from '../games.service';
import { ObserverService } from '../observer.service';
import { v4 as uuidv4 } from 'uuid'

@Component({
  selector: 'app-new-post-modal',
  templateUrl: './new-post-modal.component.html',
  styleUrls: ['./new-post-modal.component.css']
})
export class NewPostModalComponent implements OnInit {

  appData: AppData;
  subscription = new Subscription();
  game;
  gameNames;
  postText;
  loading = false;

  @ViewChild('postTextBox') postTextBox: ElementRef

  constructor(private observerService: ObserverService, private gamesService: GamesService, private http: HttpClient)
  {
      // subscribe to home component messages
      this.subscription.add(observerService.getMessage().subscribe(message => {
        this.appData = message;
      }));
      this.gamesService.getNames()
      this.gamesService.gameNames.asObservable().subscribe(gameNames => {
        this.gameNames = gameNames
      })
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
  updateObserver() {
    this.observerService.sendMessage(this.appData);
  }

  changePost(event: any) {
    this.postText = event.target.value
  }

  requestClose() {
    if (!this.isLoading()) {
      this.closeModal()
    }
  }

  closeModal() {
    this.game = undefined
    this.postText = undefined
    this.postTextBox.nativeElement.value = ''
    this.appData.newPostModalOpen = false;
    this.updateObserver()
  }

  getCover() {
    if (this.game && this.game?.id) {
      this.gamesService.getGame(this.game.id).then(game => {
        this.game = game
      })
    }
  }

  removeGame() {
    this.game = undefined
  }

  onChange(event: any) {
    let newItem = this.gameNames.find(game => game.name===event.target.value)
    if (newItem) {
      this.game = newItem
      this.getCover()
      this.updateObserver()
    }
    event.target.value = ''
  }

  sendPost() {
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
        id: this.game.id,
        coverURL: this.game.coverURL,
        rating: this.game.rating,
        name: this.game.name,
      },
      time: Date.now(),
      text: this.postText,
      isComment: '',
      parentPostID: ''
    }

    if(this.appData.file && this.appData.postImageURL && this.appData.postImagePath) {
      body['imageURL'] = this.appData.postImageURL
      body['imagePath'] = this.appData.postImagePath
    }
    console.log(body)
    this.http.post<any>(url, body)
        .toPromise()
        .then(response => {
          this.deleteFile()
          console.log(response)
          this.loading = false
          this.closeModal()
        })
        .catch(err => {
          this.deleteFile()
          console.error(err)
          this.loading = false
          this.closeModal()
        })
  }

  isDisabled() {
    return !this.game || !this.postText || !this.postText.length || this.postText.length < 10
  }

  isLoading() {
    return this.loading
  }

  deleteFile() {
    var appData = this.observerService.getMessageOnce()
    appData.postImageURL = undefined
    appData.postImagePath = undefined
    appData.file = undefined
    this.observerService.sendMessage(appData)
  }

}
