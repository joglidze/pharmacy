import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends BaseService {
  getProduct() {
    return this.get('');
  }
  getSearchProduct(search: any) {
    return this.get(`/select?keyword=${search}`);
  }
  postProduct(product: any) {
    return this.post('insert', product);
  }
}
