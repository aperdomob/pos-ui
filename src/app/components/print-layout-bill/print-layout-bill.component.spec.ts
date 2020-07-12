import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintLayoutBillComponent } from './print-layout-bill.component';

describe('PrintLayoutBillComponent', () => {
  let component: PrintLayoutBillComponent;
  let fixture: ComponentFixture<PrintLayoutBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintLayoutBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintLayoutBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
