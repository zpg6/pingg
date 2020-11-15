import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnChanges, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppData } from '../app-data';
import { ObserverService } from '../observer.service';

@Component({
  selector: 'app-rate-game-modal',
  templateUrl: './rate-game-modal.component.html',
  styleUrls: ['./rate-game-modal.component.css']
})
export class RateGameModalComponent implements OnInit, OnChanges {

  appData: AppData;
  subscription = new Subscription();
  game;
  rating;
  ratingError;
  @ViewChild('slider') slider: ElementRef

  constructor(private observerService: ObserverService, private http: HttpClient) {
      // subscribe to home component messages
      observerService.getMessage().subscribe(message => {
        this.appData = message;
        this.game = this.appData.gameBeingRated
        if (this.game) {
          this.rating = this.game.rating
        }
      })
  }

  ngOnInit() {
    if (this.game && this.rating) {
      this.slider.nativeElement.value = this.rating
    }
  }

  ngOnChanges() {
    if (this.game) {
      this.game = this.appData.gameBeingRated
      this.rating = this.game.rating
      if (this.rating && this.slider.nativeElement.value) {
        this.slider.nativeElement.value = this.rating
      }
      console.log(this.game)
    }
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
  updateObserver() {
    this.observerService.sendMessage(this.appData);
  }



  closeModal() {
    this.appData.gameBeingRated = undefined
    this.rating = 75.000
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

  saveRating() {

    let url = 'https://cs1530group11graph.uc.r.appspot.com/users/' + this.appData.profile.id + '/rated-game'
    var body = {gameID: this.game.id, rating: parseFloat(this.rating)}
    console.log(body)
    this.http.post<any>(url, body)
        .toPromise()
        .then(response => {
          console.log(response)
          if (response.response) {
            this.ratingError = response.response
          }
          if (response.newRating) {
            this.ratingError = undefined
            this.game.rating = response.newRating
            this.closeModal()
          }
        })
        .catch(err => {
          console.error(err)
          this.closeModal()
        })
  }

}
