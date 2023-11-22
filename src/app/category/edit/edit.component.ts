import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'
import { Category } from '../category';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  category: Category
  isSaving: boolean = false

  constructor(public CategoryService: CategoryService, private route: ActivatedRoute) {
    this.category = {
      id: this.route.snapshot.params['id'],
      name: '',
      description: ''
    }
  }

  ngOnInit(): void {
    this.CategoryService.show(this.route.snapshot.params['id']).then(({ data }) => {
      this.category = data
    }).catch(error => { return error })

  }

  handleSave() {
    this.isSaving = true
    this.CategoryService.update(this.category)
      .then(({ data }) => {
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
