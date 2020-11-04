import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppData } from '../app-data';
import { GamesService } from '../games.service';
import { ObserverService } from '../observer.service';

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

  constructor(private observerService: ObserverService, private gamesService: GamesService) {
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

  addPost() {
    this.closeModal()
  }

  closeModal() {
    this.game = undefined
    this.postText = undefined
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

}
