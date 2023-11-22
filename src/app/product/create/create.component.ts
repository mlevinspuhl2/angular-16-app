import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../../category/category.service';
import Swal from 'sweetalert2'
import { Category } from '../../category/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  name:string = ''
  description: string = ''
  price: number = 0
  color: string = ''
  isSaving:boolean = false
  categoryId = ''
  categories: Category[] = [];

  constructor(public ProductService: ProductService, public CategoryService: CategoryService, private _router: Router) {

  }
  ngOnInit(): void {
    this.fetchCategoryList();
  }
  fetchCategoryList() {
    this.CategoryService.getAll().then(({ data }) => {
      this.categories = data;
    }).catch(error => { return error })
  }
  handleSave(){
    this.isSaving = true
    this.ProductService.create({ name: this.name, description: this.description, price: this.price, color: this.color, categoryId: this.categoryId })
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
