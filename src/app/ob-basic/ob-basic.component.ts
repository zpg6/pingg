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

  unVerified = false

  constructor(private observerService: ObserverService, private http: HttpClient) {
    this.observerService.getMessage().subscribe(msg => {
      this.appData = msg
      if (this.appData.onboardingBasicsValid) {
        this.fnTouched = true
        this.lnTouched = true
        this.unTouched = true
        this.fnError = ''
        this.lnError = ''
        this.unError = ''
        this.unVerified = true
      }
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
    this.fnTouched = true
    if (!this.appData?.onboardingTempProfile?.firstName ||
      this.appData.onboardingTempProfile.firstName !== event.target.value)
    {
        console.log(event.target.value)
        this.appData.onboardingTempProfile.firstName = event.target.value
        this.validateFirstName()
    }
  }

  lnChange(event: any) {
    this.lnTouched = true
    if (!this.appData?.onboardingTempProfile?.lastName ||
      this.appData.onboardingTempProfile.lastName !== event.target.value) {
        this.appData.onboardingTempProfile.lastName = event.target.value
        this.validateLastName()
    }
  }

  unChange(event: any) {
    if (this.unVerified || this.appData.onboardingTempProfile.handle !== event.target.value) {
      this.unTouched = true
      this.unVerified = false
      this.validateFields()
    }
  }

  validateFirstName() {
    var issueFound = false

    if (this.appData.onboardingTempProfile.firstName.length == 0) {
      issueFound = true
      this.fnError = 'Please enter your first name.'
    }
    else if (this.appData.onboardingTempProfile.firstName.length > 20) {
      issueFound = true
      this.fnError = 'Please abbreviate your first name to limit it to 20 characters.'
    }
    else {
      this.fnError = ''
      this.validateFields()
    }

    return !issueFound
  }

  validateLastName() {
    var issueFound = false

    if (this.appData.onboardingTempProfile.lastName.length == 0) {
      issueFound = true
      this.lnError = 'Please enter your last name.'
    }
    else if (this.appData.onboardingTempProfile.lastName.length > 20) {
      issueFound = true
      this.lnError = 'Please abbreviate your last name to limit it to 20 characters.'
    }
    else {
      this.lnError = ''
      this.validateFields()
    }


    return !issueFound
  }

  loading = false

  validateUsername(): Promise<boolean> {
    let un = this.un.nativeElement.value
    this.loading = true
    return new Promise<boolean>( (resolve,reject) => {
      if (this.unVerified && this.appData.onboardingTempProfile.handle === un) {
        resolve(true)
      }
      if (un.length == 0) {
        this.unError = 'Please enter your desired username.'
        this.loading = false
        resolve(false)
      }
      else if (un.length > 15) {
        this.unError = 'Please limit to 15 characters.'
        this.loading = false
        resolve(false)
      }
      else {
        // TODO: check for more issues with username
        let url = 'https://cs1530group11graph.uc.r.appspot.com/usernames/' + un + '/' + this.appData.profile.id
        this.http.get<any>(url)
                .toPromise()
                .then(response => {
                  let result = response.response
                  if (result.includes('No')) {
                    if (!this.unTouched) this.unTouched = true
                    this.appData.onboardingTempProfile.handle = un
                    this.unVerified = true
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
                  this.unError = err?.message ? err.message:err
                  this.loading = false
                })
      }
    })
  }


  validateFields() {
    // let errorsDefined = this.fnError && this.lnError && this.unError

    let errorsEmpty = (this.fnError === '') && (this.lnError === '') && (this.unError === '')

    let allTouched = this.fnTouched && this.lnTouched && this.unTouched

    let verified = this.appData.onboardingTempProfile.handle !== '' && this.unVerified

    console.log('errorsEmpty: '+errorsEmpty)
    console.log('allTouched: '+allTouched)
    console.log('verified: '+verified)

    this.appData.onboardingBasicsValid = errorsEmpty && allTouched && verified
    this.observerService.sendMessage(this.appData)
  }
}
