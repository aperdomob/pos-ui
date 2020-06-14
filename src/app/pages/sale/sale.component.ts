import { Component, OnInit } from '@angular/core';
import { SalesModalComponent } from './components/sales-modal/sales-modal.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  newSale() {
    const dialogRef = this.dialog.open(SalesModalComponent, {
      width: '850px'
    })
  }
}
