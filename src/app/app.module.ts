import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material';

import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

import { ConfigService } from '../_services/config.service';
import { TopicService } from 'src/_services/topic.service';
import { ActionService } from 'src/_services/action.service';
import { DocsService } from 'src/_services/docs.service';
import { TopicComponent } from './topic/topic.component';
import { ActionComponent } from './action/action.component';
import { MpMarkdownComponent } from './mp-markdown/mp-markdown.component';
import { TryActionComponent } from './action/try-action/try-action.component';
import { ActionInputComponent } from './action/try-action/action-input/action-input.component';
import { ActionResultComponent } from './action/try-action/action-result/action-result.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TopicComponent,
    ActionComponent,
    MpMarkdownComponent,
    TryActionComponent,
    ActionInputComponent,
    ActionResultComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MarkdownModule.forRoot()
  ],
  providers: [
    ConfigService,
    TopicService,
    ActionService,
    DocsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
