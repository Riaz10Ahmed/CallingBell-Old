import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdLatestArrivalsPage } from './prod-latest-arrivals.page';

describe('ProdLatestArrivalsPage', () => {
  let component: ProdLatestArrivalsPage;
  let fixture: ComponentFixture<ProdLatestArrivalsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdLatestArrivalsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdLatestArrivalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
