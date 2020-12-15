import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdconsLoginPage } from './prodcons-login.page';

describe('ProdconsLoginPage', () => {
  let component: ProdconsLoginPage;
  let fixture: ComponentFixture<ProdconsLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdconsLoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdconsLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
