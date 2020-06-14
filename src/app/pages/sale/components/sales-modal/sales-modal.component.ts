import { Component, OnInit } from '@angular/core';

export interface Product {
  name: string;
  reference: string;
  enable: number;
}

export interface Transaction {
  item: string;
  cost: number;
}

const ELEMENT_DATA: Product[] = [
  { name: 'Acetaminofen 500mg (Tableta)', reference: '770303804029', enable: 34},
  { name: 'Noravel Gripa y Tos (Caja)', reference: '7702057162252', enable: 5},
  { name: 'Azitromicina 500mg (Caja)', reference: '7703712030206', enable: 834},
];

@Component({
  selector: 'app-sales-modal',
  templateUrl: './sales-modal.component.html',
  styleUrls: ['./sales-modal.component.css']
})
export class SalesModalComponent implements OnInit {
  displayedColumns: string[] = ['name', 'reference', 'enable'];
  dataSource = ELEMENT_DATA;

  displayedColumnsTransactions: string[] = ['item', 'cost'];
  transactions: Transaction[] = [
    {item: 'Beach ball', cost: 4},
    {item: 'Towel', cost: 5},
    {item: 'Frisbee', cost: 2},
    {item: 'Sunscreen', cost: 4},
    {item: 'Cooler', cost: 25},
    {item: 'Swim suit', cost: 15},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
}
