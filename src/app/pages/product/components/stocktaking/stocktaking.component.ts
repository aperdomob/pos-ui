import { Component, OnInit, Input } from '@angular/core';
import { Stocktaking } from 'src/app/domain/Stocktaking';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';

const validator = (control: FormControl, isRequired: boolean, validatorFunc: (value: any) => boolean) => {
  if (isRequired && typeof control.value === 'undefined') {
    return { required: true };
  }

  if (!validatorFunc(control.value)) {
    return { confirm: true, error: true };
  }

  return {};
};

@Component({
  selector: 'app-stocktaking',
  templateUrl: './stocktaking.component.html',
  styleUrls: ['./stocktaking.component.css']
})
export class StocktakingComponent implements OnInit {
  @Input() stocktaking: Stocktaking;

  validateForm!: FormGroup;

  private getProduct() {
    // return {
    //   id: this.product ? this.product.id : null,
    //   name: this.validateForm.get('name').value,
    //   reference: this.validateForm.get('reference').value,
    //   price: this.validateForm.get('price').value
    // }
  }

  verifyPositiveNumber(control: FormControl) {
    return validator(control, true, (value) => value >= 0);
  };

  verifyGreaterToZero(control: FormControl) {
    return validator(control, true, (value) => value > 0);
  }

  formatterDollar = (value: number) => `$ ${value}`;
  parserDollar = (value: string) => value.replace('$ ', '');

  constructor(
    private fb: FormBuilder,
    private modal: NzModalRef,
    /* private productService: ProductService*/) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      available: [null, [Validators.required, this.verifyPositiveNumber]],
      cost: [null, [Validators.required, this.verifyGreaterToZero]]
    });

    if (this.stocktaking) {
      this.validateForm.get('name').setValue(this.stocktaking.product.reference);
      this.validateForm.get('available').setValue(this.stocktaking.available);
      this.validateForm.get('cost').setValue(this.stocktaking.cost);
    } else {
      this.validateForm.get('available').setValue(0);
      this.validateForm.get('cost').setValue(0);
    }
  }

  handleSearchProduct() {
    const searchText = this.validateForm.get('name').value;
    console.log(`search product ${searchText}`)
  }

  handleOk() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    // if (this.validateForm.status === "VALID") {
    //   if (this.product) {
    //     this.productService.update(this.getProduct()).subscribe((product) => {
    //       this.modal.destroy(product);
    //     });
    //   } else {
    //     this.productService.save(this.getProduct()).subscribe((product) => {
    //       this.modal.destroy(product);
    //     });
    //   }
    // }
  }

  handleCancel() {
    this.modal.destroy();
  }
}
