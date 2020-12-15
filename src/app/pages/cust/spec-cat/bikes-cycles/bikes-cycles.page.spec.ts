import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikesCyclesPage } from './bikes-cycles.page';

describe('BikesCyclesPage', () => {
  let component: BikesCyclesPage;
  let fixture: ComponentFixture<BikesCyclesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikesCyclesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikesCyclesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
