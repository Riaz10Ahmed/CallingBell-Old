import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsHomePage } from './cons-home.page';

describe('ConsHomePage', () => {
  let component: ConsHomePage;
  let fixture: ComponentFixture<ConsHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
