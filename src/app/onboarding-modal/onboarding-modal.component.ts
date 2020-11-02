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

  constructor(private observerService: ObserverService) {
    this.observerService.getMessage().subscribe(msg => {
      this.appData = msg
    })
  }

  ngOnInit(): void {
  }

  leftButtonText() {
    if (this.appData.onboardingPage > this.firstPage) return 'Back'
    return ''
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
    if (this.appData.onboardingPage < this.lastPage) this.appData.onboardingPage++
    else {
      // submit the user
      this.appData.isOnboarded = true;
    }
    this.observerService.sendMessage(this.appData)
  }

}
