import { NavbarPage } from '../app/navbar-page.enum'
import { Game } from './game';

export class AppData {
  title = 'pingg';
  tagline = 'Where better matches are made.';
  navbarPage: NavbarPage = NavbarPage.feed
  isAuthenticated: boolean = false;
  reportingIssue: boolean = false;
  searchBarOpen: boolean = false;
  newPostModalOpen: boolean = false;
  newChannelModalOpen: boolean = false;
  username: String = null;
  email: String = null;
  uid: String = null;
}
