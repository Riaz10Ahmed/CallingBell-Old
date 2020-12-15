import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpFormPage } from './otp-form.page';

describe('OtpFormPage', () => {
  let component: OtpFormPage;
  let fixture: ComponentFixture<OtpFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtpFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
