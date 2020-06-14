import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { SalesModalComponent } from './components/sales-modal/sales-modal.component';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  constructor(private modalService: NzModalService) { }

  ngOnInit() {
  }

  newSale() {
    this.modalService.create({
      nzTitle: 'Venta',
      nzContent: SalesModalComponent
    })
  }
}
