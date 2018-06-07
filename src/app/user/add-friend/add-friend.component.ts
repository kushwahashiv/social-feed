import {Component} from '@angular/core';
import {MatDialogRef, MatSnackBar} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserApiService} from '../services/user-api.service';

@Component({
  selector: 'add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.scss']
})
export class AddFriendComponent {
  userForm: FormGroup;

  constructor(private _snackBar: MatSnackBar,
              private fb: FormBuilder,
              private snackBar: MatSnackBar,
              private userApiService: UserApiService,
              private dialogRef?: MatDialogRef<AddFriendComponent>) {
    this.createForm();
  }

  createForm() {
    const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', [Validators.pattern(EMAIL_REGEX)]]
    });
  }

  /**
   * Add a friend to your profile. This is a substitute of invite a friend feature in social sites facebook etc.
   */
  addFriend() {
    if (this.userForm.valid) {
      this.userApiService.addFriend(this.userForm.value);
      this.snackBar.open('Friend added to your profile', 'Ok', {duration: 5000});
      this.dialogRef.close(this.userForm.value);
    }
  }
}

