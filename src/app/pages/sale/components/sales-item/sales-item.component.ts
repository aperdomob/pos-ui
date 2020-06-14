import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-sales-item',
  templateUrl: './sales-item.component.html',
  styleUrls: ['./sales-item.component.css']
})
export class SalesItemComponent {

  listOfData = [
    {item: 'Beach ball', cost: 4, amount: 4},
    {item: 'Towel', cost: 5, amount: 2},
    {item: 'Frisbee', cost: 2, amount: 1},
    {item: 'Sunscreen', cost: 4, amount: 10},
    {item: 'Cooler', cost: 25, amount: 3},
    {item: 'Swim suit', cost: 15, amount: 1},
  ];

  getTotalByItem(item) {
    return item.cost * item.amount;
  }

  getTotalAmount() {
    return this.listOfData.reduce((pv, cv) => pv + cv.amount, 0);
  }

  getTotalCost() {
    return this.listOfData.reduce((pv, cv) => pv + cv.cost, 0);
  }

  getTotal() {
    return this.listOfData.reduce((pv, cv) => pv + cv.cost * cv.amount, 0);
  }
}
