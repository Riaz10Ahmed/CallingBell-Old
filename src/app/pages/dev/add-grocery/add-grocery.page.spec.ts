import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGroceryPage } from './add-grocery.page';

describe('AddGroceryPage', () => {
  let component: AddGroceryPage;
  let fixture: ComponentFixture<AddGroceryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGroceryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGroceryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
