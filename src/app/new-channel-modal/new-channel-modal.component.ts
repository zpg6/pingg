import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppData } from '../app-data';
import { ObserverService } from '../observer.service';

@Component({
  selector: 'app-new-channel-modal',
  templateUrl: './new-channel-modal.component.html',
  styleUrls: ['./new-channel-modal.component.css']
})
export class NewChannelModalComponent implements OnInit {

  appData: AppData;
  subscription = new Subscription();

  constructor(private observerService: ObserverService) {
      // subscribe to home component messages
      this.subscription.add(observerService.getMessage().subscribe(message => {
        this.appData = message;
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

  addChannel() {
    this.closeModal()
  }

  closeModal() {
    this.appData.newChannelModalOpen = false;
    this.updateObserver()
  }

}
