import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsStartPage } from './cons-start.page';

describe('ConsStartPage', () => {
  let component: ConsStartPage;
  let fixture: ComponentFixture<ConsStartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsStartPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsStartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
