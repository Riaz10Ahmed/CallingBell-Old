import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PestControlSecondPage } from './pest-control-second.page';

describe('PestControlSecondPage', () => {
  let component: PestControlSecondPage;
  let fixture: ComponentFixture<PestControlSecondPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PestControlSecondPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PestControlSecondPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
