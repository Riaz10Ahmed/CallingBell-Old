import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbikePage } from './ebike.page';

describe('EbikePage', () => {
  let component: EbikePage;
  let fixture: ComponentFixture<EbikePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbikePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbikePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
