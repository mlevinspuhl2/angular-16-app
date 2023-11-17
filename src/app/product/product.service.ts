import { Injectable } from '@angular/core';
import axios from 'axios';
import { Product } from './product';

const baseUrl = 'https://localhost:7047/api/Product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  getAll (): Promise<any>{
    return axios.get('/api/Product')
  }

  delete (id:string): Promise<any>{
    return axios.delete('/api/Product/' + id)
  }

  create(data:any): Promise<any>{
    let payload = {
      name: data.name,
      description: data.description,
      price: data.price,
      color: data.color
    }

    return axios.post('/api/Product', payload)
  }

  show (id:number): Promise<any>{
    return axios.get('/api/Product/' + id)
  }

  update(data:Product): Promise<any>{
    let payload = {
      name: data.name,
      description: data.description,
      price: data.price,
      color: data.color
    }

    return axios.put('/api/Product/' + data.id, payload)
  }

}
