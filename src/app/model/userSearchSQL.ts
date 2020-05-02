
export class UserSearchSQL {

  userId: string;
  sql: string;
  profile: string;
  fileFormat: string; // T(for Text) and C(for CSV)

  constructor() {
    this.userId = '';
    this.sql = '';
    this.profile = '';
    this.fileFormat = 'T';
  }
}
