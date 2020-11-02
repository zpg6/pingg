import { Component, OnInit } from '@angular/core';
import { AppData } from '../app-data';
import { ObserverService } from '../observer.service';

@Component({
  selector: 'app-ob-screen-names',
  templateUrl: './ob-screen-names.component.html',
  styleUrls: ['./ob-screen-names.component.css']
})
export class ObScreenNamesComponent {

  appData: AppData
  screenNames: string[] = []
  screenNamesToGamesArray = {}

  constructor(private observerService: ObserverService) {
    this.observerService.getMessage().subscribe(msg => {
      this.appData = msg
    })
  }

  addNew() {
    //this.appData.profile.screenNames[]
  }

}
