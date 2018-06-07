import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../app.module';
import {HttpClientModule} from '@angular/common/http';
import {FeedBoxComponent} from './components/feed-box/feed-box.component';
import {FeedsApiService} from './services/feeds-api.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    HttpClientModule,
    HttpClientModule
  ],
  declarations: [
    FeedBoxComponent
  ],
  providers: [
    FeedsApiService
  ],
  exports: [FeedBoxComponent]
})
export class FeedsModule {
}
