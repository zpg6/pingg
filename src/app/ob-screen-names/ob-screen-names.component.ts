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

  updateObserver() {
    this.observerService.sendMessage(this.appData)
  }

  addNew() {
    //this.appData.profile.screenNames[]
    this.appData.onboardingScreenNamesValid = false
    this.appData.screenNames.push({id: this.nextID, name: '', games: [], error: ''})
    this.updateObserver()
    this.nextID++
  }

  removeScreenName(id: number) {
    this.appData.screenNames = this.appData.screenNames.filter(obj => {
      return obj.id !== id
    })
    this.updateObserver()
  }

  unChange(event: any, screenNameID: number) {
    var index = 0;
    this.appData.screenNames.forEach(obj => {
      if (screenNameID === obj.id) {
        this.appData.screenNames[index].name = event.target.value
        if (event.target.value.length > 3) {
          this.appData.screenNames[index].error = ''
          let validNames = this.appData.screenNames.filter(sName => sName.name.length > 3)
          var dupe = false
          this.appData.screenNames.forEach(sName1 => {
            this.appData.screenNames.forEach(sName2 => {
              if (sName1.id !== sName2.id && sName1.name === sName2.name) {
                dupe = true
                this.appData.screenNames[index].error = 'Must be unique.'
              }
            })
          })
          if (!dupe && validNames.length == this.appData.screenNames.length) {
            this.appData.onboardingScreenNamesValid = true
          } else {
            this.appData.onboardingScreenNamesValid = false
          }
          this.updateObserver()
        } else {
          this.appData.screenNames[index].error = 'Must be > 3 characters.'
          this.appData.onboardingScreenNamesValid = false
          this.updateObserver()
        }
      }
      index++
    })
    this.updateObserver()
  }

  onChange(event: any, screenNameID: number) {
    let newItem = this.gameNames.find(game => game.name===event.target.value)
    if (newItem) {
      var index = 0;
      this.appData.screenNames.forEach(obj => {
        if (screenNameID === obj.id) {
          if (!obj.games.find(gameName => event.target.value === gameName.name)) {
            this.appData.screenNames[index].games.push(newItem)
          }
        }
        index++
      })
    }
    this.updateObserver()
    event.target.value = ''
  }

  remove(screenNameID: string, gameID: string) {
    var index = 0;
    this.appData.screenNames.forEach(obj => {
      if (screenNameID === obj.id) {
        this.appData.screenNames[index].games = this.appData.screenNames[index].games.filter(gameName => {
          return gameName.id !== gameID
        })
      }
      index++
    })
    this.updateObserver()
  }

}
