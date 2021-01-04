import { Component, OnInit } from '@angular/core';
import { Product } from "../model/product";
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  product = {} as Product;
  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.productService.getProduct().subscribe((products: any) => {
      this.products = products;
    });
  }

  delete(id: Number, itens: any, type: any) {
    if (this.products[0].category_title == type) {
      this.products[0].products = itens.filter(obj => obj.id != id);
    } else {
      this.products[1].products = itens.filter(obj => obj.id != id);
    }
  }
}
