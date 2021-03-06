import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppData } from '../app-data';
import { GamesService } from '../games.service';
import { ObserverService } from '../observer.service';
import { v4 as uuidv4 } from 'uuid'
import { Router } from '@angular/router';

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

  dropdownSetter = ''
  wasSet = false

  @ViewChild('dropdown') dropdown: ElementRef;

  @ViewChild('postTextBox') postTextBox: ElementRef

  constructor(private observerService: ObserverService, private gamesService: GamesService, private http: HttpClient, private router: Router)
  {
      this.wasSet = false
      // subscribe to home component messages
      this.subscription.add(observerService.getMessage().subscribe(message => {
        this.appData = message;
        this.fetchGameFromLock()
      }));
      this.gamesService.getNames()
      this.gamesService.gameNames.asObservable().subscribe(gameNames => {
        this.gameNames = gameNames
        this.fetchGameFromLock()
      })
  }

  fetchGameFromLock() {
    if (!this.game && this.gameNames && this.appData.postGameLock && this.dropdownSetter === '') {
      let newItem = this.gameNames.find(game => game.id===this.appData.postGameLock)
      if (newItem) {
        this.dropdownSetter = newItem.name
        this.game = newItem
        this.getCover()
        this.wasSet = true
      }
      this.appData.postGameLock = undefined
      this.updateObserver()
    }
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

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
    this.wasSet = false
    this.dropdownSetter = ''
    if (this.dropdown?.nativeElement?.value) {
      this.dropdown.nativeElement.value = ''
    }
    this.game = undefined
    this.postText = undefined
    this.postTextBox.nativeElement.value = ''
    this.appData.newPostModalOpen = false;
    this.updateObserver()
    this.router.navigate(['/feed'])
  }

  getCover() {
    if (this.game && this.game?.id) {
      this.gamesService.getGame(this.game.id).then(game => {
        this.game = game
      })
    }
  }

  canRemoveGame() {
    return !this.wasSet
  }

  removeGame() {
    if (this.canRemoveGame()) {
      this.game = undefined
    }
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
          body['numUpvotes'] = 0
          if (this.appData.posts && this.appData.posts.length > 0) {
            let newArray = [body]
            this.appData.posts = newArray.concat(this.appData.posts)
          } else {
            this.appData.posts = [body]
          }
          this.updateObserver()
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

  postLengthValid() {
    if (!this.postText) return false
    return this.postText.length >= 10 && this.postText.length <= 120
  }

  isDisabled() {
    return !this.game || !this.postText || !this.postText.length || this.postText.length < 10 || this.postText.length > 120
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
