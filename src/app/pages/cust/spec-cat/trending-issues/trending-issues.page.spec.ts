import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingIssuesPage } from './trending-issues.page';

describe('TrendingIssuesPage', () => {
  let component: TrendingIssuesPage;
  let fixture: ComponentFixture<TrendingIssuesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingIssuesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingIssuesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
