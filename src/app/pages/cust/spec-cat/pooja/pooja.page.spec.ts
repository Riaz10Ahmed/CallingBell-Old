import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoojaPage } from './pooja.page';

describe('PoojaPage', () => {
  let component: PoojaPage;
  let fixture: ComponentFixture<PoojaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoojaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoojaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
