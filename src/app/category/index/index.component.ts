import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../category';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{

  categories: Category[] = [];

  constructor(public CategoryService: CategoryService) { }

  ngOnInit(): void {
    this.fetchCategoryList();
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
        this.CategoryService.delete(id)
        .then( response => {
          Swal.fire({
            icon: 'success',
            title: 'Product deleted successfully!',
            showConfirmButton: false,
            timer: 1500
          })
          this.fetchCategoryList()
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
