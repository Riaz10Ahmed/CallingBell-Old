import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceriesPage } from './groceries.page';

describe('GroceriesPage', () => {
  let component: GroceriesPage;
  let fixture: ComponentFixture<GroceriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceriesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
