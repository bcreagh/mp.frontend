import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpMarkdownComponent } from './mp-markdown.component';

describe('MpMarkdownComponent', () => {
  let component: MpMarkdownComponent;
  let fixture: ComponentFixture<MpMarkdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpMarkdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpMarkdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
