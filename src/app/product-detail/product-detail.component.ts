import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';
import {ActivatedRoute, Router} from '@angular/router';
// @ts-ignore
import {ProductServiceService} from '../Service/product-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {


  product: Product;
  private service: ProductServiceService;
  // tslint:disable-next-line:variable-name
  constructor(private _service: ProductServiceService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.service = _service;
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      const id = Number(param.get('id'));
     this.product = this._service.getbyID(id)[0];
    });
  }
}
