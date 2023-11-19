import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { CategoryService } from '../../category/category.service';
import { Category } from '../../category/category';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{

  projects: Product[] = [];
  categories: Category[] = [];

  constructor(public ProductService: ProductService, public CategoryService: CategoryService) { }

  ngOnInit(): void {
    this.fetchProductList();
    this.fetchCategoryList();
  }

  fetchProductList(){
    this.ProductService.getAll().then(({data}) => {
      this.projects = data;
    }).catch(error => {return error})
  }
  fetchCategoryList() {
    this.CategoryService.getAll().then(({ data }) => {
      this.categories = data;
    }).catch(error => { return error })
  }

  handleDelete(id:string){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result =>{
      if (result.isConfirmed) {
        this.ProductService.delete(id)
        .then( response => {
          Swal.fire({
            icon: 'success',
            title: 'Product deleted successfully!',
            showConfirmButton: false,
            timer: 1500
          })
          this.fetchProductList()
          return response
        }).catch(error => {
          Swal.fire({
            icon: 'error',
           title: 'An Error Occured!',
           showConfirmButton: false,
           timer: 1500
          })
          return error
        })
      }
    })
  }
}
