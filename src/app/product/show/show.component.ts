import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  product:Product

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
}
