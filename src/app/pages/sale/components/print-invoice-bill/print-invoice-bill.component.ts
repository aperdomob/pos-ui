import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrintBillService } from '../../services/print-bill.service';

@Component({
  selector: 'app-print-invoice-bill',
  templateUrl: './print-invoice-bill.component.html',
  styleUrls: ['./print-invoice-bill.component.css']
})
export class PrintInvoiceBillComponent implements OnInit {
  invoiceIds: string[];
  invoiceDetails: Promise<any>[];

  constructor(route: ActivatedRoute, private printBillService: PrintBillService) {
    this.invoiceIds = route.snapshot.params['invoiceIds']
      .split(',');
  }

  ngOnInit(): void {
    this.invoiceDetails = this.invoiceIds
      .map(id => this.getInvoiceDetails(id));
    Promise.all(this.invoiceDetails)
      .then(() => this.printBillService.onDataReady());
  }

  getInvoiceDetails(invoiceId) {
    const amount = Math.floor((Math.random() * 100));
    return new Promise(resolve =>
      setTimeout(() => resolve({amount}), 1000)
    );
  }
}
