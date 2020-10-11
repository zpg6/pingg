import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.css']
})
export class ProfileContainerComponent implements OnInit {

  rand;

  constructor() {
    this.rand = Math.round(Math.random()*10000+Math.random()*100);
  }

  ngOnInit(): void {
  }

}
