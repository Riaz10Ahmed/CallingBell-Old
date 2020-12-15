import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdDescPage } from './prod-desc.page';

describe('ProdDescPage', () => {
  let component: ProdDescPage;
  let fixture: ComponentFixture<ProdDescPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdDescPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdDescPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
