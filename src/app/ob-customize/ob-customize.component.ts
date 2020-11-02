import { Component, OnInit } from '@angular/core';
import { AppData } from '../app-data';
import { ObserverService } from '../observer.service';

@Component({
  selector: 'app-ob-customize',
  templateUrl: './ob-customize.component.html',
  styleUrls: ['./ob-customize.component.css']
})
export class ObCustomizeComponent implements OnInit {

  locationAttempted = false;
  appData: AppData;

  constructor(private observerService: ObserverService) {
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
    this.updateObserver()
  }

  onToggle(event: any) {
    this.appData.locationEnabled = !this.appData.locationEnabled
    if (!this.locationAttempted && this.appData.locationEnabled) {
      // geolocation
      this.locationAttempted = true
    }
    this.updateObserver()
  }

}
