import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ProductService } from '../product.service';
import { CategoryService } from '../../category/category.service';
import Swal from 'sweetalert2'
import { Category } from '../../category/category';
import { Router } from '@angular/router';

import { NameValidator } from '../../util/name.validator';
/*import { NumberValidator } from '../../util/number.validator';*/

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  name:string = ''
  description: string = ''
  price: number = 0
  color: string = ''
  isSaving:boolean = false
  categoryId = ''
  categories: Category[] = [];

  constructor(private fb: FormBuilder, public ProductService: ProductService, public CategoryService: CategoryService, private _router: Router) {

  }
  ngOnInit(): void {
    this.fetchCategoryList();
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(1), NameValidator.cannotContainSpace]],
      description: ['', [Validators.required, Validators.minLength(1), NameValidator.cannotContainSpace]],
      price: [null, NameValidator.cannotContainSpace],
      color: [null],
      category: [null]
    });
  }
  fetchCategoryList() {
    this.CategoryService.getAll().then(({ data }) => {
      this.categories = data;
    }).catch(error => { return error })
  }
  saveDetails(form: any) {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(form.value, null, 4));
  }
  handleSave(form: any){
    this.isSaving = true
    if (form.value.price == null) form.value.price = 0;
    this.ProductService.create({ name: form.value.name, description: form.value.description, price: form.value.price, color: form.value.color, categoryId: form.value.categoryId })
    .then(({data}) => {
      this.isSaving = false
      Swal.fire({
        icon: 'success',
        title: 'Product saved successfully!',
        showConfirmButton: false,
        timer: 1500
      })
      this.name = ""
      this.description = ""
      this.price = 0
      this.color = ''
      this.categoryId = '';
      this._router.navigateByUrl('/product/index')
      return data

    }).catch(error => {
      this.isSaving = false
      Swal.fire({
        icon: 'error',
        title: 'An Error Occured!',
        showConfirmButton: false,
        timer: 1500
      })
      return error
    })
  }


}
