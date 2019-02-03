import { Component, OnInit, Input } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mp-markdown',
  templateUrl: './mp-markdown.component.html',
  styleUrls: ['./mp-markdown.component.css']
})
export class MpMarkdownComponent implements OnInit {

  @Input() data: string;

  constructor(
    private markdownService: MarkdownService,
    private router: Router
  ) { }

  ngOnInit() {
    const currentRoute = this.router.url;
    this.markdownService.renderer.link = (href: string, title: string, text: string) => {
      return `<a href="${currentRoute}${href}">${text}</a>`;
    };
  }

}
