import { Component, OnInit } from '@angular/core';
import { AppData } from '../app-data';
import { ObserverService } from '../observer.service';
import {GeolocationService} from '@ng-web-apis/geolocation';

@Component({
  selector: 'app-ob-customize',
  templateUrl: './ob-customize.component.html',
  styleUrls: ['./ob-customize.component.css']
})
export class ObCustomizeComponent implements OnInit {

  locationAttempted = false;
  appData: AppData;

  constructor(private observerService: ObserverService, private geolocationService: GeolocationService) {
    observerService.getMessage().subscribe(msg => {
      this.appData = msg
    })
  }

  updateObserver() {
    this.observerService.sendMessage(this.appData)
  }

  ngOnInit(): void {
  }

  imageKey() {
    return this.appData.avatarSeed * this.appData.avatarVal
  }

  onChange(event: any) {
    this.appData.avatarVal = event.target.value;
    this.appData.onboardingTempProfile.avatarVal = event.target.value * this.appData.avatarSeed;
    this.updateObserver()
  }

  onToggle(event: any) {
    this.appData.locationEnabled = !this.appData.locationEnabled
    if (!this.locationAttempted && this.appData.locationEnabled) {
      // geolocation
      this.geolocationService.subscribe(pos => {
        if (pos && pos.coords && pos.coords.latitude && pos.coords.longitude) {
          this.appData.onboardingTempProfile.latitude = pos.coords.latitude
          this.appData.onboardingTempProfile.longitude = pos.coords.longitude
          this.updateObserver()
        }
      })
      this.locationAttempted = true
    }
    this.updateObserver()
  }

}
