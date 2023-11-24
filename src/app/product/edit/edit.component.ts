import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { CategoryService } from '../../category/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'
import { Category } from '../../category/category';
import { NameValidator } from '../../util/name.validator';
import { Product } from '../product';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  name: string = ''
  description: string = ''
  price: number = 0
  color: string = ''
  isSaving: boolean = false
  categoryId = ''
  categories: Category[] = [];
  product: Product;


  constructor(private fb: FormBuilder, public ProductService: ProductService, private route: ActivatedRoute,
    public CategoryService: CategoryService, private _router: Router) {
    this.product = {
      id: this.route.snapshot.params['id'],
      name: '',
      description: '',
      price: 0,
      color: '',
      category: { id: '', name: '', description: '' },
      categoryId: ''
    }
    this.form = this.fb.group({
      id:[''],
      name: ['', [Validators.required, Validators.minLength(1), NameValidator.cannotContainSpace]],
      description: ['', [Validators.required, Validators.minLength(1), NameValidator.cannotContainSpace]],
      price: [0, NameValidator.cannotContainSpace],
      color: [''],
      categoryId: [null]
    });
  }

  ngOnInit(): void {
    this.fetchCategoryList();
    this.ProductService.show(this.route.snapshot.params['id']).then(({ data }) => {
      this.form = this.fb.group({
        id: [data.id],
        name: [data.name, [Validators.required, Validators.minLength(1), NameValidator.cannotContainSpace]],
        description: [data.description, [Validators.required, Validators.minLength(1), NameValidator.cannotContainSpace]],
        price: [data.price, NameValidator.cannotContainSpace],
        color: [data.color],
        categoryId: [data.category==null?null:data.category.id]
      });
    }).catch(error => { return error })

  }
  fetchCategoryList() {
    this.CategoryService.getAll().then(({ data }) => {
      this.categories = data;
    }).catch(error => { return error })
  }
  handleSave(form: any) {
    this.isSaving = true
    this.product = form.value;
    this.ProductService.update(this.product)
      .then(({ data }) => {
        this.isSaving = false
        Swal.fire({
          icon: 'success',
          title: 'Product saved successfully!',
          showConfirmButton: false,
          timer: 1500
        })
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
