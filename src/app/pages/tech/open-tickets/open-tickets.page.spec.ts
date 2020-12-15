import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenTicketsPage } from './open-tickets.page';

describe('OpenTicketsPage', () => {
  let component: OpenTicketsPage;
  let fixture: ComponentFixture<OpenTicketsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenTicketsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenTicketsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
