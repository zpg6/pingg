import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedContainerComponent } from './feed-container/feed-container.component';
import { MapContainerComponent } from './map-container/map-container.component';
import { GamesContainerComponent } from './games-container/games-container.component';
import { ProfileContainerComponent } from './profile-container/profile-container.component';
import { ChatContainerComponent } from './chat-container/chat-container.component';
import { GameDetailComponent } from './game-detail/game-detail.component';

const routes: Routes = [
  {
    path: '',
    component: FeedContainerComponent
  },
  {
    path: 'feed',
    component: FeedContainerComponent
  },
  {
    path: 'map',
    component: MapContainerComponent
  },
  {
    path: 'games',
    component: GamesContainerComponent
  },
  {
    path: 'games/:id',
    component: GameDetailComponent
  },
  {
    path: 'profile',
    component: ProfileContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
