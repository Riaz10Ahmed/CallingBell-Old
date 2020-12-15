import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyEstimatePage } from './supply-estimate.page';

describe('SupplyEstimatePage', () => {
  let component: SupplyEstimatePage;
  let fixture: ComponentFixture<SupplyEstimatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplyEstimatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyEstimatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
