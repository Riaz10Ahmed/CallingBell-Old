import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryLevel2Page } from './grocery-level2.page';

describe('GroceryLevel2Page', () => {
  let component: GroceryLevel2Page;
  let fixture: ComponentFixture<GroceryLevel2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceryLevel2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryLevel2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
