import { NavbarPage } from '../app/navbar-page.enum'

export class AppData {
  title = 'pingg';
  tagline = 'Where better matches are made.';

  navbarPage: NavbarPage = NavbarPage.feed

  selectedChannel: string = '';

  reportingIssue: boolean = false;
  searchBarOpen: boolean = false;
  newPostModalOpen: boolean = false;
  newChannelModalOpen: boolean = false;

  username: String = null;
  email: String = null;
  uid: String = null;
  isAuthenticated: boolean = false;
}
