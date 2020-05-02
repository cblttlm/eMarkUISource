import { UserSearchHistory } from './userSearchHistory';

export class HistorySearchResult {

  totalNum: number;
  userSearchHistories: Array<UserSearchHistory>;

  constructor() {
    this.totalNum = 0;
    this.userSearchHistories = [];
  }
}
