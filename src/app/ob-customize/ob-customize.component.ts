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
    return 'https://avatars.dicebear.com/api/bottts/'+ this.appData?.onboardingTempProfile?.avatarVal + '.svg'
  }

  onChange(event: any) {
    this.appData.onboardingTempProfile.avatarVal = event.target.value;
    this.updateObserver()
  }

  isOn() {
    return this.appData.onboardingTempProfile.locationEnabled === 'enabled'
  }

  onToggle(event: any) {
    if (this.appData.onboardingTempProfile.locationEnabled === 'disabled') {
      this.appData.onboardingTempProfile.locationEnabled = 'enabled'
    } else {
      this.appData.onboardingTempProfile.locationEnabled = 'disabled'
    }
    if ( this.appData.onboardingTempProfile.locationEnabled === 'enabled') {
      // geolocation
      this.geolocationService.subscribe(pos => {
        if (pos && pos.coords && pos.coords.latitude && pos.coords.longitude) {
          this.appData.onboardingTempProfile.latitude = pos.coords.latitude
          this.appData.onboardingTempProfile.longitude = pos.coords.longitude
          this.updateObserver()
        }
      })
    }
    this.updateObserver()
  }

}
