import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../app.module';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './components/dashboard.component';
import {FeedsModule} from '../feeds/feeds.module';
import {FormsModule} from '@angular/forms';
import {UserModule} from '../user/user.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    DashboardRoutingModule,
    MaterialModule,
    FeedsModule,
    UserModule
  ],
  declarations: [
    DashboardComponent
  ]

})
export class DashboardModule {
}
