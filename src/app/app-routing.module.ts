import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedContainerComponent } from './feed-container/feed-container.component';

const routes: Routes = [
  { path: '', component: FeedContainerComponent },
  { path: 'feed', component: FeedContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
