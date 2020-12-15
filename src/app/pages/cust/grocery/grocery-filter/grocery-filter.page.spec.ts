import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryFilterPage } from './grocery-filter.page';

describe('GroceryFilterPage', () => {
  let component: GroceryFilterPage;
  let fixture: ComponentFixture<GroceryFilterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceryFilterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
