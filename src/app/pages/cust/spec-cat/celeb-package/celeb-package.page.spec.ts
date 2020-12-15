import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebPackagePage } from './celeb-package.page';

describe('CelebPackagePage', () => {
  let component: CelebPackagePage;
  let fixture: ComponentFixture<CelebPackagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelebPackagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebPackagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
