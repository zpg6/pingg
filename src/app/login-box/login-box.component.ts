import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppData } from '../app-data';
import { Subscription } from 'rxjs';
import { ObserverService } from '../observer.service';
import { NavbarPage } from '../navbar-page.enum';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.css']
})
export class LoginBoxComponent implements OnInit, OnDestroy {

  appData: AppData;
  subscription = new Subscription();
  public lottieConfig: Object = {
    path: 'assets/lottie-files/greenCircleExpanding.json',
    renderer: 'canvas',
    autoplay: true,
    loop: true
  };
  anim: any;
  private animationSpeed: number = 1;

  constructor(private observerService: ObserverService) {
      // subscribe to home component messages
      this.subscription.add(observerService.getMessage().subscribe(message => {
        this.appData = message;
        console.log('Subscription updated @ LoginBoxComponent')
      }));
      console.log('Subscription created @ LoginBoxComponent')
  }
  ngOnInit() {}

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
  updateObserver() {
    this.observerService.sendMessage(this.appData);
  }

  reportIssue() {
    if (!(this.appData.reportingIssue)) {
      this.appData.reportingIssue = true;
      this.updateObserver();
    }
  }


  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
