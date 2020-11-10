import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppData } from '../app-data';
import { Subscription } from 'rxjs';
import { ObserverService } from '../observer.service';
import { FirebaseUISignInFailure, FirebaseUISignInSuccessWithAuthResult } from 'firebaseui-angular';
import {AngularFireAuth} from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../profile'

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
    private afAuth: AngularFireAuth, private http: HttpClient) {
      // subscribe to home component messages
      this.subscription.add(observerService.getMessage().subscribe(message => {
        this.appData = message;
      }));
  }

  screenNamesIsArray(data: any) {
    return Array.isArray(data.screenNames)
  }

  ngOnInit(): void {
    this.afAuth.authState.subscribe(d =>
      {
        if(d != null){
          this.appData.username = d.displayName;
          this.appData.email = d.email;
          this.appData.uid = d.uid;
          this.appData.profile.id = d.uid
          this.appData.onboardingTempProfile.id = d.uid
          this.appData.profile.lastLogin = Math.round(new Date().getTime() / 1000)

          let url = 'https://cs1530group11graph.uc.r.appspot.com/user/' + d.uid
          this.http.get<any>(url).toPromise().then(profileObj => {
            var data = profileObj.response.properties
            console.log(data)
            if (data) {
              console.log(data.screenNames)
              if (!this.screenNamesIsArray(data)) {
                data.screenNames = [data.screenNames]
              }
              // data.screenNames = data.screenNames.map(nameObj => {
              //   return JSON.parse(nameObj)
              // })
              this.appData.profile = data
              this.appData.isOnboarded = true;
              this.updateObserver();
            }
            this.appData.isAuthenticated = true;
            this.updateObserver()
          })
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
    this.appData.isAuthenticated = true;
    this.updateObserver();
  }

  errorCallback(data: FirebaseUISignInFailure) {
  }

  uiShownCallback() {
    this.loading = false;
  }
}
