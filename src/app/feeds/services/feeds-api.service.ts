import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class FeedsApiService {
  /**
   * Flag to see if status update is in progress
   * @type {boolean}
   */
  private inProgress = false;

  /**
   * Possible available reactions
   * @type {string[]}
   */
  private reactions: string[] = ['like', 'dislike', 'love'];

  /**
   * The maximum length and minimum length of a status
   * @type {number}
   */
  public maxLength = 500;
  /**
   * The maximum length and minimum length of a status
   * @type {number}
   */
  public minLength = 0;
  /**
   * angular fire list ref for statuses
   */
  public itemsRef: AngularFireList<any>;

  /**
   * All the statuses available
   */
  public items: Observable<any>;

  /**
   * Class constructor, injects the angular fire database as db
   * @param {AngularFireDatabase} db
   */
  constructor(private db: AngularFireDatabase) {
    this.itemsRef = this.db.list('/statuses');
  }

  /**
   * Method to post the status to Firebase
   * @param {string} status
   * @param userRef
   */
  public post(status: string, userRef: any) {
    if (!this.updating()) {

      this.inProgress = true;
      const payload = {
        text: status,
        like: 0,
        dislike: 0,
        love: 0,
        user: userRef.payload.val().name,
        createdAt: {'.sv': 'timestamp'}
      };
      this.itemsRef.push(payload).then(() => this.inProgress = false);
    }
  }

  /**
   * Method to send a reaction to a status to Firebase
   * @param {string} reaction
   * @param feed
   */
  react(reaction: string, feed: any) {
    if (this.reactions.indexOf(reaction) > -1) {
      const reactions: any = {};
      const count: number = isNaN(parseInt(feed.payload.val()[reaction], 10)) ? 0 : parseInt(feed.payload.val()[reaction], 10);
      reactions[reaction] = count + 1;
      this.itemsRef.update(feed.key, reactions);
    }
  }

  /**
   * Method to get the recent feeds from Firebase
   */
  latestFeeds() {
    this.items = this.itemsRef.snapshotChanges().pipe(
      map(r => {
        r.sort((x: any, y: any) => {
          const a = x.payload.val().createdAt;
          const b = y.payload.val().createdAt;
          return a < b ? -1 : a > b ? 1 : 0;
        });
        return r.reverse();
      })
    );
  }

  /**
   * Method to check the validity of a status update
   * @param {string} status
   * @returns {boolean}
   */
  valid(status: string): boolean {
    return status.trim().length >= this.minLength && status.trim().length <= this.maxLength;
  }

  /**
   * Method to check the in progress flag
   * @returns {boolean}
   */
  updating(): boolean {
    return this.inProgress;
  }
}
