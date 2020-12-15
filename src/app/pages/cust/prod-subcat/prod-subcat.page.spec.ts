import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdSubcatPage } from './prod-subcat.page';

describe('ProdSubcatPage', () => {
  let component: ProdSubcatPage;
  let fixture: ComponentFixture<ProdSubcatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdSubcatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdSubcatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
