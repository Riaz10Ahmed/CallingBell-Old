import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustLoginPage } from './cust-login.page';

describe('CustLoginPage', () => {
  let component: CustLoginPage;
  let fixture: ComponentFixture<CustLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustLoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
