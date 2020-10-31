import { NavbarPage } from '../app/navbar-page.enum'
import { ProfileContainerComponent } from './profile-container/profile-container.component';
import { Profile } from './profile';

export class AppData {
  title = 'pingg';
  tagline = 'Where better matches are made.';

  selectedChannel: string = '';

  reportingIssue: boolean = false;
  searchBarOpen: boolean = false;
  newPostModalOpen: boolean = false;
  newChannelModalOpen: boolean = false;

  username: String = null;
  email: String = null;
  uid: String = null;
  isAuthenticated: boolean = false;
  profile: Profile = new Profile();
}
