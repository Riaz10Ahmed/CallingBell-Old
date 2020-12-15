import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechHomePage } from './tech-home.page';

describe('TechHomePage', () => {
  let component: TechHomePage;
  let fixture: ComponentFixture<TechHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
