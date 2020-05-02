import {AuthenticationService} from '../services/authentication.service';

export class UserSearchHistory {

  userId: string;
  profile: string;
  timestamp: Date;
  searchContent: string;

  constructor() {
    this.userId = '';
    this.profile = '';
    this.timestamp = new Date();
    this.searchContent = '';
  }
  setSearchContent(searchContent: string) {
    this.searchContent = searchContent;
  }
  getSearchContent() {
    return this.searchContent;
  }
}
