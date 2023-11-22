import { Component } from '@angular/core';
import { CategoryService } from '../category.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  name: string = ''
  description: string = ''
  isSaving: boolean = false

  constructor(public CategoryService: CategoryService) { }

  handleSave() {
    this.isSaving = true
    this.CategoryService.create({ name: this.name, description: this.description })
      .then(({ data }) => {
        this.isSaving = false
        Swal.fire({
          icon: 'success',
          title: 'Product saved successfully!',
          showConfirmButton: false,
          timer: 1500
        })
        this.name = ""
        this.description = ""
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
