import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../../category/category.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'
import { Product } from '../product';
import { Category } from '../../category/category';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product: Product
  isSaving: boolean = false
  categories: Category[] = [];

  constructor(public ProductService: ProductService, private route: ActivatedRoute, public CategoryService: CategoryService) {
    this.product = {
      id:this.route.snapshot.params['id'],
      name: '',
      description: '',
      price: 0,
      color: '',
      category: { id: '', name: '', description:'' }
    }
  }

  ngOnInit(): void {
    this.ProductService.show(this.route.snapshot.params['id']).then(({data}) => {
      this.product = data
    }).catch(error => {return error})
    this.fetchCategoryList();
  }
  fetchCategoryList() {
    this.CategoryService.getAll().then(({ data }) => {
      this.categories = data;
    }).catch(error => { return error })
  }
  handleSave(){
    this.isSaving = true
    this.ProductService.update(this.product)
    .then(({data}) => {
      this.isSaving = false
      Swal.fire({
        icon: 'success',
        title: 'Product saved successfully!',
        showConfirmButton: false,
        timer: 1500
      })
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
