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
  rateGameModalOpen: boolean = false;

  username: String = null;
  email: String = null;
  uid: String = null;

  isAuthenticated: boolean = false;
  isOnboarded: boolean = false;
  onboardingPage = 0;
  onboardingBasicsValid = false;
  onboardingScreenNamesValid = true;
  screenNames = [];
  avatarVal = 50;
  avatarSeed = Math.round(Math.random() * 100);
  locationEnabled = false;
  onboardingTempProfile = new Profile();
  position;
  profile: Profile = new Profile();

  gameBeingRated;
}
