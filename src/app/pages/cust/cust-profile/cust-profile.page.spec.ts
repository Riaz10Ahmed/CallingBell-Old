import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustProfilePage } from './cust-profile.page';

describe('CustProfilePage', () => {
  let component: CustProfilePage;
  let fixture: ComponentFixture<CustProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
