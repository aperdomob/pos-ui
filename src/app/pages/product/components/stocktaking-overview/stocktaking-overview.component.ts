import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Stocktaking } from 'src/app/domain/Stocktaking';
import { StocktakingComponent } from '../stocktaking/stocktaking.component';

@Component({
  selector: 'app-stocktaking-overview',
  templateUrl: './stocktaking-overview.component.html',
  styleUrls: ['./stocktaking-overview.component.css']
})
export class StocktakingOverviewComponent implements OnInit {
  searchValue: String;
  listOfData: Stocktaking[] = [{
    id: 1,
    product: {
      id: 1,
      name: 'Ubuprofeno',
      reference: '1332321',
      price: 20000
    },
    cost: 1000,
    available: 200
  }];

  listOfCurrentPageData = [];
  setOfCheckedId = new Set<number>();
  checked = false;
  indeterminate = false;

  // closeDialogEvent = new EventEmitter();

  constructor(
    private modalService: NzModalService,
    /*private productService: ProductService*/) { }

  ngOnInit(): void {
    // this.closeDialogEvent.subscribe((data: Product) => {
    //   if (data) {
    //     const index = this.listOfData.findIndex((item) => item.id == data.id);

    //     if (index !== -1) {
    //       this.listOfData.splice(index);
    //     }

    //     this.listOfData = [data, ...this.listOfData]
    //   }
    // });

    // this.productService.getAll().subscribe((response) => {
    //   this.listOfData = response;
    // });
  }

  add() {
    this.modalService.create({
      nzTitle: 'Agregar Inventario',
      nzWidth: 1200,
      nzContent: StocktakingComponent,
      // nzAfterClose: this.closeDialogEvent
    });
  }

  // editProduct(product: Product) {
  editProduct(product) {
    // this.modalService.create({
    //     nzTitle: 'Crear Producto',
    //     nzWidth: 500,
    //     nzContent: ProductComponent,
    //     nzAfterClose: this.closeDialogEvent,
    //     nzComponentParams: {
    //       product
    //     }
    //   });
  }

  // deleteProduct(product: Product) {
  deleteProduct(product) {
    // this.productService.delete(product.id).subscribe(() => {
    //   this.listOfData = this.listOfData.filter((p) => p.id !== product.id);
    // });
  }

  deleteSelected() {
    const ids = Array.from(this.setOfCheckedId);

    // forkJoin(ids.map((id) => this.productService.delete(id))).subscribe(() => {
    //   this.listOfData = this.listOfData.filter((product) => !ids.includes(product.id))
    // });
  }

  searchProduct() {

  }

  handleOk(): void {
    console.log('called');
  }

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach(item => this.updateCheckedSet(item.id, value));
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfData.length > 0 && this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.id));
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.id)) && !this.checked;
  }
}
