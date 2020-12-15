import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustHomePage } from './cust-home.page';

describe('CustHomePage', () => {
  let component: CustHomePage;
  let fixture: ComponentFixture<CustHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
