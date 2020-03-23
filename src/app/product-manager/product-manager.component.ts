import {Component, OnInit} from '@angular/core';
import {Product} from '../Product';
// @ts-ignore
import {ProductServiceService} from '../Service/product-service.service';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.scss']
})
export class ProductManagerComponent implements OnInit {

  data: Product[];
  edit: Product;
  new: Product;
  // tslint:disable-next-line:variable-name
  private service: ProductServiceService;

  // tslint:disable-next-line:variable-name
  constructor(private _service: ProductServiceService) {
    this.service = _service;
  }

  ngOnInit(): void {
    this.getproduct();
  }

  getproduct(): void {
    this.data = this.service.getListProduct();
    console.log(this.data);
  }
  deleteproduct(product: Product): void {
    this._service.deleteProduct(product);
    this.getproduct();
  }
  getid(pro: Product): void {
    this.edit = pro;
  }
  thoat(): void {
    this.edit = null;
  }
  them(): void {
    this.new = new Product();
    this.new.id=this.data.length+1;
  }
  luu(): void {
    this._service.insertProduct(this.new);
    this.new=null;
  }
}
