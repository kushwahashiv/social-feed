import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';

const routes: Route[] = [
  {
    path: '',
    component: AppComponent,
    children: [
      {path: '', loadChildren: 'src/app/dashboard/dashboard.module#DashboardModule'}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
