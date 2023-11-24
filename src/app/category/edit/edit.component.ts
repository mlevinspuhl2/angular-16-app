import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from '../category.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'
import { Category } from '../category';
import { NameValidator } from '../../util/name.validator';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  name: string = ''
  description: string = ''
  category: Category
  isSaving: boolean = false

  constructor(private fb: FormBuilder, public CategoryService: CategoryService, private route: ActivatedRoute, private _router: Router) {
    this.category = {
      id: this.route.snapshot.params['id'],
      name: '',
      description: ''
    }
    this.form = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.minLength(1), NameValidator.cannotContainSpace]],
      description: ['', [Validators.required, Validators.minLength(1), NameValidator.cannotContainSpace]]
    });
  }

  ngOnInit(): void {
    this.CategoryService.show(this.route.snapshot.params['id']).then(({ data }) => {
      this.form = this.fb.group({
        id: [data.id],
        name: [data.name, [Validators.required, Validators.minLength(1), NameValidator.cannotContainSpace]],
        description: [data.description, [Validators.required, Validators.minLength(1), NameValidator.cannotContainSpace]]
      });
    }).catch(error => { return error })

  }

  handleSave(form: any) {
    this.isSaving = true
    this.category = form.value;
    this.CategoryService.update(this.category)
      .then(({ data }) => {
        this.isSaving = false
        Swal.fire({
          icon: 'success',
          title: 'Product saved successfully!',
          showConfirmButton: false,
          timer: 1500
        })
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
