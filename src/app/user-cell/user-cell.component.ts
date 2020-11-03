import { Component, Input, OnInit } from '@angular/core';
import { ObserverService } from '../observer.service';
import { Profile } from '../profile';

@Component({
  selector: 'app-user-cell',
  templateUrl: './user-cell.component.html',
  styleUrls: ['./user-cell.component.css']
})
export class UserCellComponent implements OnInit {

  @Input('user') user: Profile

  constructor(private observerService: ObserverService) {
    observerService.getMessage().subscribe(msg => this.user = msg.profile)
  }

  ngOnInit(): void {
  }

}
