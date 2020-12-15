import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillListPage } from './bill-list.page';

describe('BillListPage', () => {
  let component: BillListPage;
  let fixture: ComponentFixture<BillListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
