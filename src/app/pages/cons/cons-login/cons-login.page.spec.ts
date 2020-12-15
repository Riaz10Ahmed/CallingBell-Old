import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsLoginPage } from './cons-login.page';

describe('ConsLoginPage', () => {
  let component: ConsLoginPage;
  let fixture: ComponentFixture<ConsLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsLoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
