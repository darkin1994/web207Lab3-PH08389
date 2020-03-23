import {Component, OnInit} from '@angular/core';
import {Product} from '../Product';
// @ts-ignore
import {ProductServiceService} from '../Service/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  data: Product[];


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
  }

}
