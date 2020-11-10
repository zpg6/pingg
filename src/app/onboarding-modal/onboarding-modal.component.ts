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

  screenNamesIsArray() {
    return Array.isArray(this.appData.onboardingTempProfile.screenNames)
  }

  isJson(obj): boolean {
    try {
        JSON.stringify(obj);
    } catch (e) {
        return false;
    }
    return true;
  }

  rightButtonClick() {
    if (this.appData.onboardingPage < this.lastPage) {

      this.appData.onboardingPage++
    }
    else {
      let url = 'https://cs1530group11graph.uc.r.appspot.com/user/' + this.appData?.onboardingTempProfile?.id + (this.appData?.profile?.firstName.length > 0 ? '/update':'')
      console.log(url)

      var body: any = this.appData.onboardingTempProfile

      try {
        body.screenNames = body.screenNames.map(obj => JSON.stringify(obj as object))
      }
      catch {
        body.screenNames = JSON.stringify(body.screenNames)
      }
      if (this.appData?.profile?.firstName.length > 0) {
        body = {fields: body}
      }
      console.log(body)
      this.http.post<any>(url, body)
               .toPromise()
               .then(response => {
                 console.log(response)
                 this.appData.isOnboarded = true
                 this.observerService.sendMessage(this.appData)
               })
               .catch(err => {
                 console.error(err)
               })
      let sn: Set<string> = new Set()
      var postRequestBody;
      if(body?.fields) {
        postRequestBody = body.fields
      } else {
        postRequestBody = body
      }
      //console.log("BODY: " + JSON.stringify(postRequestBody.screenNames))
      postRequestBody.screenNames.forEach(screenName => {
        let games = JSON.parse(screenName).games
        games.forEach(game => {
          sn.add(game.id)
        })
      })
      // // this.appData.onboardingTempProfile.screenNames.forEach(screenName => {
      //   screenName["game"].forEach(game => {
      //     console.log("sn2: " + game.id)
      //     sn.add(game.id)
      //   })
      // })
      // if (!this.isJson(this.appData.onboardingTempProfile.screenNames)) {
      //   this.appData.onboardingTempProfile.screenNames.forEach(scrName => {
      //     if (Array.isArray(scrName.games)) {
      //       scrName.games.forEach(game => {
      //         sn.add(game.id)
      //       })
      //     }
      //   })
      // } else {
      //   let temp: any = this.appData.onboardingTempProfile.screenNames
      //   sn.add(temp.id)
      // }
      
      console.log("sn2: " + JSON.stringify(sn))
      sn.forEach(screenGame => {
        let url = 'https://cs1530group11graph.uc.r.appspot.com/users/' + this.appData.profile.id + '/followed-game'
        let body = { gameID: screenGame }
        console.log('follow url = '+url)
        console.log(body)
        this.http.post<any>(url, body).toPromise()
                  .then(response => {
                    console.log(response)
                    if (response.response == 'Success!') {

                    }
                  })
                  .catch(err => console.error(err))
      })

    }
    this.observerService.sendMessage(this.appData)
  }

  rightButtonDisabled() {
    return (this.appData.onboardingPage == 0 && !this.appData.onboardingBasicsValid) ||
           (this.appData.onboardingPage == 1 && !this.appData.onboardingScreenNamesValid)
  }

}
