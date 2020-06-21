import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { ProductService } from '../../services/product.service';
import { Product } from 'src/app/domain/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  validateForm!: FormGroup;

  private getProduct() {
    return {
      id: this.product ? this.product.id : null,
      name: this.validateForm.get('name').value,
      reference: this.validateForm.get('reference').value,
      price: this.validateForm.get('price').value
    }
  }

  priceValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value <= 0) {
      return { confirm: true, error: true };
    }
    return {};
  };

  formatterDollar = (value: number) => `$ ${value}`;
  parserDollar = (value: string) => value.replace('$ ', '');

  constructor(
    private fb: FormBuilder,
    private modal: NzModalRef,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      reference: [null, [Validators.required]],
      price: [null, [Validators.required, this.priceValidator]]
    });

    if (this.product) {
      this.validateForm.get('name').setValue(this.product.name);
      this.validateForm.get('reference').setValue(this.product.reference);
      this.validateForm.get('price').setValue(this.product.price);
    } else {
      this.validateForm.get('price').setValue(0);
    }
  }

  handleOk() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if (this.validateForm.status === "VALID") {
      if (this.product) {
        this.productService.update(this.getProduct()).subscribe((product) => {
          this.modal.destroy(product);
        });
      } else {
        this.productService.save(this.getProduct()).subscribe((product) => {
          this.modal.destroy(product);
        });
      }
    }
  }

  handleCancel() {
    this.modal.destroy();
  }
}
