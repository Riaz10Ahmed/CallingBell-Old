import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebPage } from './celeb.page';

describe('CelebPage', () => {
  let component: CelebPage;
  let fixture: ComponentFixture<CelebPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelebPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
