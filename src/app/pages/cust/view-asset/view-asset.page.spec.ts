import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAssetPage } from './view-asset.page';

describe('ViewAssetPage', () => {
  let component: ViewAssetPage;
  let fixture: ComponentFixture<ViewAssetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAssetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAssetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
