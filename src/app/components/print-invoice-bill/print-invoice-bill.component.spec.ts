import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintInvoiceBillComponent } from './print-invoice-bill.component';

describe('PrintInvoiceBillComponent', () => {
  let component: PrintInvoiceBillComponent;
  let fixture: ComponentFixture<PrintInvoiceBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintInvoiceBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintInvoiceBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
