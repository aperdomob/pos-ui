import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  validateForm!: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if (this.validateForm.status === "VALID") {
      this.productService.save(this.getProduct()).subscribe(() => {
        this.destroyModal();
      });
    }
  }

  private getProduct() {
    return {
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

    this.validateForm.get('price').setValue(0);
  }

  handleOk() {
    this.submitForm();
  }

  handleCancel() {
    this.destroyModal();
  }

  destroyModal(): void {
    this.modal.destroy();
  }
}
