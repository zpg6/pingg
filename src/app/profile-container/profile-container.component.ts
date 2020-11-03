import { Component, OnInit } from '@angular/core';
import { ObserverService } from '../observer.service';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.css']
})
export class ProfileContainerComponent implements OnInit {

  user;

  constructor(private observerService: ObserverService) {
    this.observerService.getMessage().subscribe(msg => {
      this.user = msg.profile
    })
  }

  ngOnInit(): void {
  }

}
