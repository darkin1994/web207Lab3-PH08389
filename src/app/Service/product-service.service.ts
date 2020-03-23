import {Injectable} from '@angular/core';
import {Product} from '../Product';
import {ListProduct} from '../ListProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  products = ListProduct;
  constructor() {
  }

  getListProduct() {
    return this.products;
  }

  deleteProduct(product: Product) {
    // tslint:disable-next-line:only-arrow-functions
    this.products = this.products.filter(function(value) {
      return value !== product;
    });
  }

  updateProduct(product: Product) {
    this.products.forEach((value, index) => {
      if (value.id === product.id) {
        this.products = this.products.splice(index, 1, product);
      }
    });
  }
  insertProduct(product: Product) {
    this.products.push(product);
  }
  // @ts-ignore
  getbyID = (id: number) => {
    // tslint:disable-next-line:no-shadowed-variable
     const  product = this.getListProduct().filter(p => p.id === id);
     if (product) {
       return product;
     } else {
       throw  Error('Not Found');
     }
  }
}
