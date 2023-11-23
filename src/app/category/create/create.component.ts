import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from '../category.service';
import Swal from 'sweetalert2'
import { NameValidator } from '../../util/name.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  name: string = ''
  description: string = ''
  isSaving: boolean = false
  constructor(private fb: FormBuilder, public CategoryService: CategoryService, private _router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(1), NameValidator.cannotContainSpace]],
      description: ['', [Validators.required, Validators.minLength(1), NameValidator.cannotContainSpace]],
    });

  }
  saveDetails(form: any) {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(form.value, null, 4));
  }
  handleSave(form: any) {
    this.isSaving = true
    if (form.value.name == '') {
      Swal.fire({
        icon: 'error',
        title: 'Name is required',
        showConfirmButton: false,
        timer: 1500
      })
      this.isSaving = false

    } else {
      this.CategoryService.create({ name: form.value.name, description: form.value.description })
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
          this._router.navigateByUrl('/category/index')
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
}
