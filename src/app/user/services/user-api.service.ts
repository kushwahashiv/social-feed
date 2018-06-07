import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs';
import {User} from '../interfaces/user';

@Injectable()
export class UserApiService {
  /**
   * Flag to see if status update is in progress
   * @type {boolean}
   */
  private inProgress = false;
  /**
   * angular fire list ref for user
   */
  public itemsRef: AngularFireList<any>;
  /**
   * All the user/ friends available to the logged in user
   */
  public items: Observable<any[]>;

  /**
   * Class constructor, injects the angular fire database as db for users
   * @param {AngularFireDatabase} db
   */
  constructor(private db: AngularFireDatabase) {
    this.itemsRef = this.db.list('/user');
  }

  /**
   * Method to add a friend to Firebase
   * @param {User} user
   */
  public addFriend(user: User) {
    if (!this.updating()) {
      this.inProgress = true;
      const payload = {
        name: user.name,
        age: user.age,
        location: user.location,
        createdAt: {'.sv': 'timestamp'}
      };
      this.itemsRef.push(payload).then(() => this.inProgress = false);
    }
  }

  /**
   * Method to get the recent status feeds from Firebase of a selected or active user
   */
  usersList() {
    this.items = this.itemsRef.snapshotChanges();
  }

  /**
   * Method to check the in progress flag
   * @returns {boolean}
   */
  updating(): boolean {
    return this.inProgress;
  }
}
