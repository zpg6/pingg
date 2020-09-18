import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.css']
})
export class ConversationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  list = ['Player 1','Player 2','Player 3','Player 4','Player 5','Player 6','Player 7'];

}
