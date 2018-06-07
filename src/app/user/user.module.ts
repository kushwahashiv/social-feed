import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../app.module';
import {FeedsModule} from '../feeds/feeds.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserApiService} from './services/user-api.service';
import {AddFriendComponent} from './add-friend/add-friend.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    MaterialModule,
    FeedsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AddFriendComponent
  ],
  providers: [
    UserApiService
  ],
  exports: [AddFriendComponent],
  entryComponents: [AddFriendComponent],
})
export class UserModule {
}
