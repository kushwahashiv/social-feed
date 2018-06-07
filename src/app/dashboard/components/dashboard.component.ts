import {Component, OnInit} from '@angular/core';
import {FeedsApiService} from '../../feeds/services/feeds-api.service';
import {UserApiService} from '../../user/services/user-api.service';
import {AddFriendComponent} from '../../user/add-friend/add-friend.component';
import {MatDialog, MatDialogConfig, MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public activeUser: any;
  public statusMessage: string;
  // Flag to see if a new statusMessage can be added or nah
  public canPostStatus = false;

  constructor(public feedsApiService: FeedsApiService,
              public userApiService: UserApiService,
              public dialog: MatDialog,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.feedsApiService.latestFeeds();
    this.userApiService.usersList();
  }

  /**
   * Check is users status text is valid
   */
  isStatusValid() {
    this.canPostStatus = this.feedsApiService.valid(this.statusMessage) && this.feedsApiService.updating() === false;
  }

  /**
   * Post status on the social platform
   */
  postStatus() {
    if (this.activeUser) {
      if (this.feedsApiService.valid(this.statusMessage)) {
        this.feedsApiService.post(this.statusMessage, this.activeUser);
      }
      this.statusMessage = '';
    } else {
      this.snackBar.open('Please select a user to add a status', 'Ok', {duration: 5000});
    }
  }

  /**
   * Status message's reaction count update on a particular status feed
   * @param reaction
   * @param statusObject
   */
  react(reaction: any, statusObject: any) {
    this.feedsApiService.react(reaction, statusObject);
  }

  /**
   * Find a new friend to add in your profile.
   * PS: This sample app do not have invite friend invite feature but one need to manually add a friend to his profile using
   * + icon button next to friend list.
   */
  findNewFriend() {
    const dialogRef = this.dialog.open(AddFriendComponent, <MatDialogConfig>{
      width: '450px',
      disableClose: true,
      hasBackdrop: true,
      role: 'dialog',
    });
    dialogRef.afterClosed().subscribe();
  }

  /**
   * In select item change i.e. user change this gets trigger
   * @param e
   */
  onChange(e: any) {
    this.activeUser = e.value;
  }
}
