import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebFormPage } from './celeb-form.page';

describe('CelebFormPage', () => {
  let component: CelebFormPage;
  let fixture: ComponentFixture<CelebFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelebFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
