import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavbarPage } from '../navbar-page.enum'
import { AppData } from '../app-data';
import { Subscription } from 'rxjs';
import { ObserverService } from '../observer.service';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-feed-hero',
  templateUrl: './feed-container.component.html',
  styleUrls: ['./feed-container.component.css']
})
export class FeedContainerComponent implements OnInit, OnDestroy {

  example = 'Here is some text as the contents of this post. Here is some text as the contents of this post. Here is some text as the contents of this post. Here is some text as the contents of this post. Here is some text as the contents of this post. Here is some text as the contents of this post.'

  appData: AppData;
  subscription = new Subscription();
  title = 'Stock Manager';
  posts: any[] = [];

  constructor(private observerService: ObserverService, private gamesService: GamesService) {
      // subscribe to home component messages
      this.subscription.add(observerService.getMessage().subscribe(message => {
        this.appData = message;
      }));
  }
  ngOnInit() {
    let games = this.gamesService.getSet('Most Rated')
    var i = 0, max = games.length
    for (i = 0; i<max; i++) {
      let index = Math.round(Math.random()*max)
      this.posts.push({
        id: i,
        user: this.appData.profile,
        game: games[index],
        text: this.example,
        time: new Date(),
      })
    }
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
  updateObserver() {
    this.observerService.sendMessage(this.appData);
  }

}
