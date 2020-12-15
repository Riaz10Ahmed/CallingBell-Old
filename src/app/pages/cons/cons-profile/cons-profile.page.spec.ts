import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsProfilePage } from './cons-profile.page';

describe('ConsProfilePage', () => {
  let component: ConsProfilePage;
  let fixture: ComponentFixture<ConsProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
