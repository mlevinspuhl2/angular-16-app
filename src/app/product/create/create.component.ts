import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import Swal from 'sweetalert2'
import { Category } from '../../category/category';

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
  category: any;

  constructor(public ProductService: ProductService) {}

  handleSave(){
    this.isSaving = true
    this.ProductService.create({ name: this.name, description: this.description, price: this.price, color:this.color, category:this.category})
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
      this.color=''
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
