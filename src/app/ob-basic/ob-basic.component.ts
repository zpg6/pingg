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

  fnError = ''
  lnError = ''
  unError = ''

  appData: AppData;

  constructor(private observerService: ObserverService) {
    this.observerService.getMessage().subscribe(msg => {
      this.appData = msg
    })
  }

  ngOnInit(): void {

  }

  ngAfterViewChecked() {
    this.fn.nativeElement.value = this.appData.onboardingTempProfile.firstName
    this.ln.nativeElement.value = this.appData.onboardingTempProfile.lastName
    this.un.nativeElement.value = this.appData.onboardingTempProfile.handle
  }

  fnChange(event: any) {
    this.appData.onboardingTempProfile.firstName = event.target.value
    this.validateFirstName()
  }

  lnChange(event: any) {
    this.appData.onboardingTempProfile.lastName = event.target.value

    this.validateLastName()
  }

  unChange(event: any) {
    this.appData.onboardingTempProfile.handle = event.target.value

    this.validateUsername()
  }

  validateFirstName() {
    // var issueFound = false

    // if (this.appData.onboardingTempProfile.firstName.length == 0) {
    //   issueFound = true
    //   this.fnError = 'Please enter your first name.'
    // }
    // else if (false) {
    //   // TODO: check for more issues with first name
    // }
    // else {
    //   this.fnError = ''
    //   this.validateFields()
    // }

    // return !issueFound
  }

  validateLastName() {
    // var issueFound = false

    // if (this.appData.onboardingTempProfile.lastName.length == 0) {
    //   issueFound = true
    //   this.lnError = 'Please enter your last name.'
    // }
    // else if (false) {
    //   // TODO: check for more issues with last name
    // }
    // else {
    //   this.lnError = ''
    //   this.validateFields()
    // }

    // return !issueFound
  }

  validateUsername() {
    // var issueFound = false

    // if (this.appData.onboardingTempProfile.handle.length == 0) {
    //   issueFound = true
    //   this.unError = 'Please enter your last name.'
    // }
    // else if (false) {
    //   // TODO: check for more issues with last name
    // }
    // else {
    //   this.unError = ''
    //   this.validateFields()
    // }

    // return !issueFound
  }


  validateFields() {
    // this.appData.onboardingBasicsValid = this.validateFirstName() && this.validateLastName() && this.validateUsername()
    // this.observerService.sendMessage(this.appData)
  }
}
