import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppData } from '../app-data';
import { ObserverService } from '../observer.service';
import { Injectable} from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-report-issue',
  templateUrl: './report-issue.component.html',
  styleUrls: ['./report-issue.component.css']
})
export class ReportIssueComponent implements OnInit, OnDestroy {

  appData: AppData;
  subscription = new Subscription();
  expanded = '';

  loading = false

  @ViewChild('issue') issue: ElementRef;

  constructor(private observerService: ObserverService, private http: HttpClient) {
      // subscribe to home component messages
      this.subscription.add(observerService.getMessage().subscribe(message => {
        this.appData = message;
      }));
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
  updateObserver() {
    this.observerService.sendMessage(this.appData);
  }

  closeModal() {
    this.appData.reportingIssue = false;
    this.updateObserver()
  }

  sendReport() {
    this.loading = true
    // send report here
    const now = new Date()
    let time = Math.round(now.getTime() / 1000)
    let body = {"userID": this.appData.profile.id, "time": time, "text": this.issue.nativeElement.value}
    this.issue.nativeElement.value = ''
    let url = 'https://cs1530group11graph.uc.r.appspot.com/report-issue'

    this.http.post<any>(url, body).toPromise()
    .then(response => {
      this.loading = false
      this.closeModal();
    })
    .catch(err => {
      this.loading = false
      console.error(err)
      this.closeModal();
    })
  }
}

export class Error {

  text: String = "";
  userID: String = "";
}
