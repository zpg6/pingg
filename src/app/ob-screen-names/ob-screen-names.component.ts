import { Component, OnInit, ViewChild } from '@angular/core';
import { AppData } from '../app-data';
import { GamesService } from '../games.service';
import { ObserverService } from '../observer.service';
import { PingService } from '../ping.service';

@Component({
  selector: 'app-ob-screen-names',
  templateUrl: './ob-screen-names.component.html',
  styleUrls: ['./ob-screen-names.component.css']
})
export class ObScreenNamesComponent {

  appData: AppData
  gameNames = []
  nextID = 0

  constructor(private observerService: ObserverService, private gamesService: GamesService, private ping: PingService) {
    this.observerService.getMessage().subscribe(msg => {
      this.appData = msg
      if (!this.screenNamesIsArray()) {
        this.appData.onboardingTempProfile.screenNames = [this.appData.onboardingTempProfile.screenNames]
      }
    })
    this.ping.pingStream.subscribe(pingVal => {
      if (this.appData) {
        this.appData.onboardingTempProfile.ping = pingVal
      }
    })
    this.gamesService.getNames()
    this.gamesService.gameNames.asObservable().subscribe(gameNames => {
      this.gameNames = gameNames
    })
  }

  screenNamesIsArray() {
    return Array.isArray(this.appData.onboardingTempProfile.screenNames)
  }

  updateObserver() {
    this.observerService.sendMessage(this.appData)
  }

  addNew() {
    //this.appData.profile.screenNames[]
    this.appData.onboardingScreenNamesValid = false
    this.appData.onboardingTempProfile.screenNames.push({id: this.nextID, name: '', games: [], error: ''})
    this.updateObserver()
    this.nextID++
  }

  removeScreenName(id: number) {
    this.appData.onboardingTempProfile.screenNames = this.appData.onboardingTempProfile.screenNames.filter(obj => {
      return obj.id !== id
    })
    this.updateObserver()
  }

  unChange(event: any, screenNameID: number) {
    this.appData.onboardingTempProfile.screenNames.forEach((obj,index) => {
      if (screenNameID === obj.id) {
        this.appData.onboardingTempProfile.screenNames[index].name = event.target.value

        if (event.target.value.length > 3 && event.target.value.length <= 15) {
          this.appData.onboardingTempProfile.screenNames[index].error = ''
          let validNames = this.appData.onboardingTempProfile.screenNames.filter(sName => sName.name.length > 3)
          var dupe = false
          this.appData.onboardingTempProfile.screenNames.forEach(sName1 => {
            this.appData.onboardingTempProfile.screenNames.forEach(sName2 => {
              if (sName1.id !== sName2.id && sName1.name === sName2.name) {
                dupe = true
                this.appData.onboardingTempProfile.screenNames[index].error = 'Must be unique.'
              }
            })
          })
          if (!dupe && validNames.length == this.appData.onboardingTempProfile.screenNames.length) {
            this.appData.onboardingScreenNamesValid = true
          } else {
            this.appData.onboardingScreenNamesValid = false
          }
          this.updateObserver()
        } else {
          this.appData.onboardingTempProfile.screenNames[index].error = 'Must be at least 3 characters and at most 15.'
          this.appData.onboardingScreenNamesValid = false
          this.updateObserver()
        }
      }
    })
    this.updateObserver()
  }

  onChange(event: any, screenNameID: number) {
    let newItem = this.gameNames.find(game => game.name===event.target.value)
    if (newItem) {
      this.appData.onboardingTempProfile.screenNames.forEach((obj,index) => {
        if (screenNameID === obj.id) {
          if (!obj.games.find(gameName => event.target.value === gameName.name)) {
            this.appData.onboardingTempProfile.screenNames[index].games.push(newItem)
          }
        }
      })
    }
    this.updateObserver()
    event.target.value = ''
  }

  remove(screenNameID: string, gameID: string) {
    this.appData.onboardingTempProfile.screenNames.forEach((obj,index) => {
      if (screenNameID === obj.id) {
        this.appData.onboardingTempProfile.screenNames[index].games = this.appData.onboardingTempProfile.screenNames[index].games.filter(gameName => {
          return gameName.id !== gameID
        })
      }
    })
    this.updateObserver()
  }

}
