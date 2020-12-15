import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryDescPage } from './grocery-desc.page';

describe('GroceryDescPage', () => {
  let component: GroceryDescPage;
  let fixture: ComponentFixture<GroceryDescPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceryDescPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryDescPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
