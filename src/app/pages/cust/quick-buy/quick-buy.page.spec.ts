import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickBuyPage } from './quick-buy.page';

describe('QuickBuyPage', () => {
  let component: QuickBuyPage;
  let fixture: ComponentFixture<QuickBuyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickBuyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickBuyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
