import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PestControlPage } from './pest-control.page';

describe('PestControlPage', () => {
  let component: PestControlPage;
  let fixture: ComponentFixture<PestControlPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PestControlPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PestControlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
