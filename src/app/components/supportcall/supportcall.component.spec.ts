import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportcallComponent } from './supportcall.component';

describe('SupportcallComponent', () => {
  let component: SupportcallComponent;
  let fixture: ComponentFixture<SupportcallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportcallComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportcallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
