import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Readme } from 'src/_model/readme';
import { Action } from 'src/_model/action';
import { DocsService } from 'src/_services/docs.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  readmeContent = '';

  constructor(
    private docsService: DocsService
    ) { }

  ngOnInit() {
    this.getDocs();
  }

  getDocs() {
    this.docsService.getAboutDoc()
      .subscribe(
        (aboutDoc) => {
          this.readmeContent = aboutDoc;
        },
        (error) => {
          console.error(`There was a problem retrieving the about doc!`);
          console.error(error);
        }
      );
  }
}
