import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { retry } from 'rxjs/operators';

export interface Product {
  id:number;
  name:string;
  price:number;
  quantity:number;
}
@Injectable({
  providedIn: 'root'
})
export class CartService {
// data: Product[]=[
//   {id:0, name:'Dove Soap - Pink - 50g', price:50, quantity:1},
//   {id:1, name:'Himalaya Shampoo - Herbal - 200ml', price:104, quantity:1},
//   {id:2, name:'Dove Soap - Pink - 100g', price:100, quantity:1},
//   {id:3, name:'Himalaya Shampoo - Herbal - 500ml', price:200, quantity:1},
// ];
data: object;

private cart=[];
private cardItemCount = new BehaviorSubject(0);

  constructor() { }

   getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }

  getCartItemCount(){
    return this.cardItemCount;
  }
 
  addProduct(product){
    console.log(product);
    let added = false;
    for(let p of this.cart){
      if(p.id == product.id){
        p.count +=1;
        added=true;
        break;
      }
    }
    if(!added){
      this.cart.push(product);
    }
    this.cardItemCount.next(this.cardItemCount.value + 1 );
  }

  decreaseProduct(product){
    for (let [index,p] of this.cart.entries()){
      if(p.id === product.id){
        p.count -=1;
        if(p.count == 0){
          this.cart.splice(index,1);
        }
      }
    }
    this.cardItemCount.next(this.cardItemCount.value - 1);
  }

  removeProduct(product){
    for (let [index,p] of this.cart.entries()){
      if(p.id === product.id){
        this.cardItemCount.next(this.cardItemCount.value - p.count);
        this.cart.splice(index,1);
      }
    }
  }

}
