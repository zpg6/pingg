import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppData } from '../app-data';
import { ObserverService } from '../observer.service';

@Component({
  selector: 'app-rate-game-modal',
  templateUrl: './rate-game-modal.component.html',
  styleUrls: ['./rate-game-modal.component.css']
})
export class RateGameModalComponent implements OnInit {

  appData: AppData;
  subscription = new Subscription();
  game;
  rating = 75.000;

  constructor(private observerService: ObserverService) {
      // subscribe to home component messages
      this.subscription.add(observerService.getMessage().subscribe(message => {
        this.appData = message;
        this.game = message.gameBeingRated
        this.rating = this.game
      }));
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



  closeModal() {
    this.appData.rateGameModalOpen = false;
    this.updateObserver()
  }

  onChange(event: any) {
    this.rating = event.target.value;
    console.log(this.rating)
  }

  getName() {
    if (this.game && this.game.name) {
      if (this.game.name.length > 25) {
        return this.game.name.slice(0,25) + '...'
      } else {
        return this.game.name
      }
    } else {
      return 'Game'
    }
  }

}
