import { Component, OnInit } from '@angular/core';
import { AppData } from '../app-data';
import { ObserverService } from '../observer.service';

@Component({
  selector: 'app-onboarding-steps',
  templateUrl: './onboarding-steps.component.html',
  styleUrls: ['./onboarding-steps.component.css']
})
export class OnboardingStepsComponent implements OnInit {

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

}
