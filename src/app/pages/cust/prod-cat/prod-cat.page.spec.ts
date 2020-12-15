import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdCatPage } from './prod-cat.page';

describe('ProdCatPage', () => {
  let component: ProdCatPage;
  let fixture: ComponentFixture<ProdCatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdCatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdCatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
