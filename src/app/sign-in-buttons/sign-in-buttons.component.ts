import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppData } from '../app-data';
import { Subscription } from 'rxjs';
import { ObserverService } from '../observer.service';
import { FirebaseUISignInFailure, FirebaseUISignInSuccessWithAuthResult } from 'firebaseui-angular';

@Component({
  selector: 'app-sign-in-buttons',
  templateUrl: './sign-in-buttons.component.html',
  styleUrls: ['./sign-in-buttons.component.css']
})
export class SignInButtonsComponent implements OnInit, OnDestroy {

  appData: AppData;
  subscription = new Subscription();
  loading = true;

  constructor(private observerService: ObserverService) {
      // subscribe to home component messages
      this.subscription.add(observerService.getMessage().subscribe(message => {
        this.appData = message;
        console.log('Subscription updated @ SignInButtonsComponent')
      }));
      console.log('Subscription created @ SignInButtonsComponent')
  }
  ngOnInit() {}

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
  updateObserver() {
    this.observerService.sendMessage(this.appData);
  }

  bypassLogin() {
    this.appData.isAuthenticated = true;
    this.updateObserver();
  }

  reportIssue() {
    if (!(this.appData.reportingIssue)) {
      this.appData.reportingIssue = true;
      this.updateObserver();
    }
  }

  successCallback(signInSuccessData: FirebaseUISignInSuccessWithAuthResult) {
    console.log('firebase success callback:' + signInSuccessData);
  }

  errorCallback(errorData: FirebaseUISignInFailure) {
    console.log('firebase error callback:' + errorData);
  }

  uiShownCallback() {
    console.log('firebase ui shown.');
    this.loading = false;
  }
}
