import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppData } from '../app-data';
import { ObserverService } from '../observer.service';

@Component({
  selector: 'app-onboarding-modal',
  templateUrl: './onboarding-modal.component.html',
  styleUrls: ['./onboarding-modal.component.css']
})
export class OnboardingModalComponent implements OnInit {

  firstPage = 0
  lastPage = 2
  appData: AppData

  constructor(private observerService: ObserverService, private http: HttpClient) {
    this.observerService.getMessage().subscribe(msg => {
      this.appData = msg
    })
  }

  ngOnInit(): void {
  }

  leftButtonText() {
    return 'Back'
  }

  rightButtonText() {
    if (this.appData.onboardingPage < this.lastPage) return 'Next'
    return 'Done'
  }


  leftButtonClick() {
    if (this.appData.onboardingPage > this.firstPage) {
      this.appData.onboardingPage--
      this.observerService.sendMessage(this.appData)
    }
  }
  rightButtonClick() {
    if (this.appData.onboardingPage < this.lastPage) {

      this.appData.onboardingPage++
    }
    else {
      let url = 'https://cs1530group11graph.uc.r.appspot.com/user/' + this.appData.profile.id
      var body = this.appData.onboardingTempProfile
      body.screenNames = this.appData.screenNames.map(nameObj => JSON.stringify(nameObj))
      this.http.post<any>(url, body)
               .toPromise()
               .then(response => {
                 this.appData.isOnboarded = true
                 this.observerService.sendMessage(this.appData)
               })
               .catch(err => {
                 console.error(err)
               })
    }
    this.observerService.sendMessage(this.appData)
  }

  rightButtonDisabled() {
    return (this.appData.onboardingPage == 0 && !this.appData.onboardingBasicsValid) ||
           (this.appData.onboardingPage == 1 && !this.appData.onboardingScreenNamesValid)
  }

}
