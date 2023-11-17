import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'
import { Product } from '../product';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product:Product
  isSaving:boolean = false

  constructor(public ProductService: ProductService, private route: ActivatedRoute) {
    this.product = {
      id:this.route.snapshot.params['id'],
      name: '',
      description: '',
      price: 0,
      color:''
    }
  }

  ngOnInit(): void {
    this.ProductService.show(this.route.snapshot.params['id']).then(({data}) => {
      this.product = data
    }).catch(error => {return error})

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
