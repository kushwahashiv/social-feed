import {Route, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardComponent} from './components/dashboard.component';

const routes: Route[] = [
  {path: '', component: DashboardComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class DashboardRoutingModule {
}
