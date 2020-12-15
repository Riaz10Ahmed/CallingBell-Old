import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTicketPage } from './edit-ticket.page';

describe('EditTicketPage', () => {
  let component: EditTicketPage;
  let fixture: ComponentFixture<EditTicketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTicketPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTicketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
