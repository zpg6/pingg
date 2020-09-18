import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedContainerComponent } from './feed-container/feed-container.component';
import { MapContainerComponent } from './map-container/map-container.component';
import { ConnectContainerComponent } from './connect-container/connect-container.component';
import { ProfileContainerComponent } from './profile-container/profile-container.component';
import { ChatContainerComponent } from './chat-container/chat-container.component';
import { GameDetailComponent } from './game-detail/game-detail.component';

const routes: Routes = [
  { path: '', component: FeedContainerComponent },
  { path: 'feed', component: FeedContainerComponent },
  { path: 'map', component: MapContainerComponent },
  { path: 'connect', component: ConnectContainerComponent },
  { path: 'profile', component: ProfileContainerComponent },
  { path: 'chat', component: ChatContainerComponent },
  { path: 'game', component: GameDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
