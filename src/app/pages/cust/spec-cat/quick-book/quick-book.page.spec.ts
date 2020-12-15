import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickBookPage } from './quick-book.page';

describe('QuickBookPage', () => {
  let component: QuickBookPage;
  let fixture: ComponentFixture<QuickBookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickBookPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickBookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
