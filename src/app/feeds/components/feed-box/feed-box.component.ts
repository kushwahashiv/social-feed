import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'feed-box',
  templateUrl: './feed-box.component.html',
  styleUrls: ['./feed-box.component.scss']
})

export class FeedBoxComponent {
  @Input() feed: any;
  @Output() userActions = new EventEmitter();

  /**
   * When a user reacts to a status this function emits that status to its parent component
   * i.e. DashboardComponent. In react function of DashboardComponent
   * we handle this emitted reaction to update the status message's reaction count.
   * @param {string} action
   */
  react(action: string) {
    this.userActions.emit(action);
  }
}
