import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TopicComponent } from './topic/topic.component';
import { ActionComponent } from './action/action.component';
import { TryActionComponent } from './action/try-action/try-action.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'topics/:path', component: TopicComponent },
  { path: 'topics/:topic/actions/:action-route', component: ActionComponent },
  { path: 'topics/:topic/actions/:action-route/try-it', component: TryActionComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/