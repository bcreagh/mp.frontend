import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

import { ConfigService } from '../_services/config.service';
import { TopicService } from 'src/_services/topic.service';
import { ActionService } from 'src/_services/action.service';
import { TopicComponent } from './topic/topic.component';
import { ActionComponent } from './action/action.component';
import { MpMarkdownComponent } from './mp-markdown/mp-markdown.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TopicComponent,
    ActionComponent,
    MpMarkdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MarkdownModule.forRoot()
  ],
  providers: [
    ConfigService,
    TopicService,
    ActionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
