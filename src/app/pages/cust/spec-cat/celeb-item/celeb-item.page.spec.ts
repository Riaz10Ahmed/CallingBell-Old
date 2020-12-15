import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebItemPage } from './celeb-item.page';

describe('CelebItemPage', () => {
  let component: CelebItemPage;
  let fixture: ComponentFixture<CelebItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelebItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
