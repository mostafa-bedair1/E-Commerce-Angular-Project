import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-store-home',
  templateUrl: './store-home.component.html',
  styleUrls: ['./store-home.component.css'],
})
export class StoreHomeComponent implements OnInit {
  productsList: any = [];
  cart: any = [];

  constructor(private StoreService: StoreService) {}

  addToCart(proudct: any) {
    this.cart.push(proudct);
    console.log(this.cart)
    console.log(this.cart.length)
  }

  ngOnInit(): void {
    this.StoreService.GetAllProudcts().subscribe((proudcts) => {
      this.productsList = proudcts.slice(1, 19);
      // console.warn(this.productsList);
    });
  }
}
