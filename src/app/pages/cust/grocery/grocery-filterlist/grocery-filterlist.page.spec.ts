import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryFilterlistPage } from './grocery-filterlist.page';

describe('GroceryFilterlistPage', () => {
  let component: GroceryFilterlistPage;
  let fixture: ComponentFixture<GroceryFilterlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceryFilterlistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryFilterlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
