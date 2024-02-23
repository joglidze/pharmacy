import { CommonModule, JsonPipe } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import {
  concatAll,
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
  mergeMap,
  of,
  switchMap,
} from 'rxjs';
import { Product } from '../../core/interfaces/product';
import { ProductService } from '../../core/services/product.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    MatTableModule,
    FormsModule,
    CommonModule,
    MatCardModule,
    HttpClientModule,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class MainPageComponent {
  finalProduct: any = {
    products: [],
  };

  total: number = 0;
  products: any = [];

  constructor(private productService: ProductService) {}

  calcProductTotal(product: Product, order: number) {
    console.log(order);
    if (product.quant > order && order > 1) {
      product.total = product.fasi * order;
    }

    product.amount = order;

    const index = this.finalProduct.products.findIndex(
      (ele: Product) => ele.id == product.id
    );
    if (index == -1 && order > 0) {
      this.finalProduct.products.push(product);
    }
    this.finalProduct.products.reduce(
      (accumulator: any, currentProduct: any) =>
        (this.total = accumulator + currentProduct.total),
      0
    );
    console.log(this.finalProduct);
  }

  loadproducts(search: string) {
    if (!search) {
      this.products = [];
      return this.products;
    }

    this.productService
      .getSearchProduct(search)
      .pipe(
        map((res: any) => {
          const jsonProduct = JSON.parse(res);
          this.products = jsonProduct;
          console.log(jsonProduct);
          return jsonProduct;
        })
      )
      .subscribe();
  }

  onSubmit() {
    console.log(this.finalProduct.products);
    // productId amounnt price

    const sendData = this.finalProduct.products.map((product: any) => ({
      productId: product.id,
      productAmount: product.amount,
    }));
    console.log(sendData);
    this.productService.postProduct(sendData).subscribe((res) => {
      console.log(res);
      if (res == 'ok') {
        this.products = [];
        this.finalProduct.products = [];
        this.total = 0;
        return this.products;
      }
    });
  }
}
