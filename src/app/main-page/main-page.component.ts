import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
export interface Product {
  id: string;
  name: string;
  total: number;
  price: number;
  order: number;
  ManufacturingCompany: string;
  quantity: number;
}

const ELEMENT_DATA: Product[] = [
  {
    id: '1',
    name: 'Caudalie - კოდალი Vinergetic შრატი 30 მლ 3489',
    price: 84.0,
    quantity: 20,
    order: 0,
    ManufacturingCompany: 'sa',
    total: 0,
  },
  {
    id: '2',
    name: 'Caudalie - კოდალი Vinergetic შრატი 30 მლ 3489',
    price: 84.0,
    quantity: 20,
    order: 0,
    ManufacturingCompany: 'sa',
    total: 0,
  },
  {
    id: '3',
    name: 'Caudalie - კოდალი Vinergetic შრატი 30 მლ 3489',
    price: 84.0,
    quantity: 20,
    ManufacturingCompany: 'sa',
    order: 0,
    total: 0,
  },
  {
    id: '3',
    name: 'Caudalie - კოდალი Vinergetic შრატი 30 მლ 3489',
    price: 84.0,
    quantity: 20,
    ManufacturingCompany: 'sa',
    order: 0,
    total: 0,
  },
  {
    id: '4',
    name: 'Caudalie - კოდალი Vinergetic შრატი 30 მლ 3489',
    price: 84.0,
    ManufacturingCompany: 'sa',
    quantity: 20,
    total: 0,
    order: 0,
  },
  {
    id: '5',
    name: 'Caudalie - კოდალი Vinergetic შრატი 30 მლ 3489',
    price: 84.0,
    quantity: 20,
    ManufacturingCompany: 'sa',
    total: 0,
    order: 0,
  },
  {
    id: '6',
    name: 'Caudalie - კოდალი Vinergetic შრატი 30 მლ 3489',
    price: 84.0,
    quantity: 20,
    ManufacturingCompany: 'sa',
    total: 0,
    order: 0,
  },
];
@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [MatTableModule, FormsModule, CommonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class MainPageComponent {
  finalProduct: any = {
    user: 'irakli',
    products: [],
  };

  total: number = 0;
  displayedColumns: string[] = [
    'name',
    'price',
    'Manufacturing country',
    'Manufacturing company',
    'quantity',
    'order',
    'total',
  ];
  dataSource = ELEMENT_DATA;
  // წარმოებელი კომპანია და წარმოებელი ქვეყანა. id სერია ზედნადები

  calcProductTotal(product: Product, order: number) {
    console.log(order);
    product.total = product.price * order;
    if (order > product.order) {
      this.total = product.total;
      product.order++;
    } else if (order < product.order) {
      this.total -= product.total;
      product.order--;
    }
    const index = this.finalProduct.products.findIndex(
      (ele: Product) => ele.id == product.id
    );
    if (index == -1) {
      this.finalProduct.products.push(product);
    }
    console.log(index);

    console.log(this.finalProduct.products);
  }
}
