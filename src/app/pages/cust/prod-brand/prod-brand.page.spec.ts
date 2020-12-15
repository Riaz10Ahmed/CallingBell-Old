import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdBrandPage } from './prod-brand.page';

describe('ProdBrandPage', () => {
  let component: ProdBrandPage;
  let fixture: ComponentFixture<ProdBrandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdBrandPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdBrandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
