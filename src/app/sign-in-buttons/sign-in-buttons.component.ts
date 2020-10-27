import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppData } from '../app-data';
import { Subscription } from 'rxjs';
import { ObserverService } from '../observer.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseUISignInFailure, FirebaseUISignInSuccessWithAuthResult } from 'firebaseui-angular';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-sign-in-buttons',
  templateUrl: './sign-in-buttons.component.html',
  styleUrls: ['./sign-in-buttons.component.css']
})
export class SignInButtonsComponent implements OnInit, OnDestroy {

  appData: AppData;
  subscription = new Subscription();
  loading = true;

  constructor(private observerService: ObserverService,
    private afAuth: AngularFireAuth, private firestore: AngularFirestore) {
      // subscribe to home component messages
      this.subscription.add(observerService.getMessage().subscribe(message => {
        this.appData = message;
        console.log('Subscription updated @ SignInButtonsComponent')
      }));
      console.log('Subscription created @ SignInButtonsComponent')
  }
  ngOnInit(): void {
    this.afAuth.authState.subscribe(d =>
      {
        //console.log(d);
        if(d != null){
          this.appData.isAuthenticated = true;
          this.appData.username = d.displayName;
          this.appData.email = d.email;
          this.appData.uid = d.uid;
          this.firestore.collection('UserList').doc('d.uid').get().toPromise().then(document => {
              let data = document.data()
              if (data) {
                this.appData.profile.city = data["city"]
                this.appData.profile.state = data["state"]
                this.appData.profile.currentPing = data["currentPing"]
                this.appData.profile.id = d.uid
                this.appData.profile.screenNames = data["screenNames"]
                this.appData.profile.firstName = data["firstName"]
                this.appData.profile.lastName = data["lastName"]
              } else {
                //TODO ask the user to enter screennames and game it's for, first name, and lat name for their profile. Send it to firestore and update this.appData.profile. Then use APIs to get city, state, and ping
              }
          })
          this.updateObserver();
        }
        else{
          this.appData.isAuthenticated = false;
          this.updateObserver();
        }
      });
  }

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

  successCallback(data: FirebaseUISignInSuccessWithAuthResult) {
    console.log('successCallback', data);
    this.appData.isAuthenticated = true;
    this.updateObserver();
  }

  errorCallback(data: FirebaseUISignInFailure) {
    console.warn('errorCallback', data);
  }

  uiShownCallback() {
    console.log('firebase ui shown.');
    this.loading = false;
  }
}
