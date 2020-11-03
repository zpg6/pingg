import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppData } from '../app-data';
import { GamesService } from '../games.service';
import { ObserverService } from '../observer.service';

@Component({
  selector: 'app-ob-basic',
  templateUrl: './ob-basic.component.html',
  styleUrls: ['./ob-basic.component.css']
})
export class ObBasicComponent implements OnInit {

  @ViewChild('fn') fn: ElementRef
  @ViewChild('ln') ln: ElementRef
  @ViewChild('un') un: ElementRef

  fnError
  lnError
  unError
  unSuccess

  fnTouched = false;
  lnTouched = false;
  unTouched = false;

  appData: AppData;

  seeded = false

  constructor(private observerService: ObserverService, private http: HttpClient) {
    this.observerService.getMessage().subscribe(msg => {
      this.appData = msg
    })
  }

  ngOnInit(): void {

  }

  ngAfterViewChecked() {
    if (!this.seeded) {
      this.seeded = true
      this.fn.nativeElement.value = this.appData.onboardingTempProfile.firstName
      this.ln.nativeElement.value = this.appData.onboardingTempProfile.lastName
      this.un.nativeElement.value = this.appData.onboardingTempProfile.handle
    }
  }

  fnChange(event: any) {
    if (!this.fnTouched) this.fnTouched = true
    this.appData.onboardingTempProfile.firstName = event.target.value
    this.validateFirstName()
  }

  lnChange(event: any) {
    if (!this.lnTouched) this.lnTouched = true
    this.appData.onboardingTempProfile.lastName = event.target.value
    this.validateLastName()
  }

  unChange(event: any) {
    if (!this.unTouched) this.unTouched = true
    this.appData.onboardingTempProfile.handle = event.target.value
    this.validateFields()
  }

  validateFirstName() {
    var issueFound = false

    if (this.appData.onboardingTempProfile.firstName.length == 0) {
      issueFound = true
      this.fnError = 'Please enter your first name.'
    }
    else if (false) {
      // TODO: check for more issues with first name
    }
    else {
      this.fnError = ''
    }
    this.validateFields()

    return !issueFound
  }

  validateLastName() {
    var issueFound = false

    if (this.appData.onboardingTempProfile.lastName.length == 0) {
      issueFound = true
      this.lnError = 'Please enter your last name.'
    }
    else if (false) {
      // TODO: check for more issues with last name
    }
    else {
      this.lnError = ''
    }
    this.validateFields()

    return !issueFound
  }

  loading = false

  validateUsername(): Promise<boolean> {
    this.loading = true
    return new Promise<boolean>( (resolve,reject) => {

      if (this.appData.onboardingTempProfile.handle.length == 0) {
        this.unError = 'Please enter your desired username.'
        this.loading = false
        resolve(false)
      }
      else {
        // TODO: check for more issues with username
        let url = 'https://cs1530group11graph.uc.r.appspot.com/usernames/' + this.appData.onboardingTempProfile.handle
        this.http.get<any>(url)
                .toPromise()
                .then(response => {
                  let result = response.response
                  if (result.includes('No')) {
                    this.unError = ''
                    this.unSuccess = result
                    this.validateFields()
                    this.loading = false
                    resolve(true)
                  } else {
                    this.unSuccess = ''
                    this.unError = result
                    this.validateFields()
                    this.loading = false
                    resolve(false)
                  }
                }).catch(err => {
                  console.error(err)
                  this.unError = err
                  this.loading = false
                })
      }
    })
  }


  validateFields() {
    // let errorsDefined = this.fnError && this.lnError && this.unError

    let errorsEmpty = (this.fnError === '') && (this.lnError === '') && (this.unError === '')

    let allTouched = this.fnTouched && this.lnTouched && this.unTouched

    this.appData.onboardingBasicsValid = errorsEmpty && allTouched
    this.observerService.sendMessage(this.appData)
  }
}
