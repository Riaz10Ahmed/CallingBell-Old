import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdListPage } from './prod-list.page';

describe('ProdListPage', () => {
  let component: ProdListPage;
  let fixture: ComponentFixture<ProdListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
