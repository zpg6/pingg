import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppData } from '../app-data';
import { ObserverService } from '../observer.service';
import { Injectable} from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-report-issue',
  templateUrl: './report-issue.component.html',
  styleUrls: ['./report-issue.component.css']
})
export class ReportIssueComponent implements OnInit, OnDestroy {

  appData: AppData;
  subscription = new Subscription();
  expanded = '';
  afs: AngularFirestore;

  constructor(private observerService: ObserverService,
              private firestore: AngularFirestore) {
      // subscribe to home component messages
      this.subscription.add(observerService.getMessage().subscribe(message => {
        this.appData = message;
        console.log('Subscription updated @ ReportIssueComponent')
      }));
      console.log('Subscription created @ ReportIssueComponent')
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
    // send report here
    var input = (<HTMLInputElement>document.getElementById("issuefield")).value;
    this.closeModal();
    
    return new Promise<any>((resolve, reject) =>{
      this.afs
          .collection("Reports") // specify the collection
          .doc(this.appData.uid.toString())// specify the document
          .collection("text")
          .doc(input.toString())
          .set(JSON.parse(JSON.stringify(input))) //set all data
          .then(res => {}, err => reject(err));
    });
  }
}
