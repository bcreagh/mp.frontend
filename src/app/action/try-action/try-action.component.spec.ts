import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TryActionComponent } from './try-action.component';

describe('TryActionComponent', () => {
  let component: TryActionComponent;
  let fixture: ComponentFixture<TryActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TryActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TryActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
