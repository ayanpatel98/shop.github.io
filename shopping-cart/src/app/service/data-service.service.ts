import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private shoppingData : {[id: string] : any} = {
    'a1':{id: 'a1', name: 'Item 1', category: 'Category 1', price: 10, quantityAvailable: 5, orderQty: 0, totalQuantity: 5 },
    'b1':{id: 'b1', name: 'Item 2', category: 'Category 2', price: 10, quantityAvailable: 5, orderQty: 0, totalQuantity: 5 },
    'c1':{id: 'c1', name: 'Item 3', category: 'Category 3', price: 10, quantityAvailable: 5, orderQty: 0, totalQuantity: 5 },
    'd1':{id: 'd1', name: 'Item 4', category: 'Category 4', price: 10, quantityAvailable: 5, orderQty: 0, totalQuantity: 5 },
    'e1':{id: 'e1', name: 'Item 5', category: 'Category 5', price: 10, quantityAvailable: 5, orderQty: 0, totalQuantity: 5 },
  }

  private cartItems : {[id: string] : any} = {}

  constructor() {}

  setData(id: string, data: Object){
    this.shoppingData[id] = data;
  }

  getData(){
    return this.shoppingData;
  }

  getDataById(id: string){
    return this.shoppingData[id];
  }

  addCartItems(id: string, data: any){
    // if(this.cartItems[id]==undefined){
      this.cartItems[id] = data;

      this.setData(id, data);
    // }
    // else{
    //   this.cartItems[id]["quantityAvailable"] = this.cartItems[id]["totalQuantity"] - data["quantityAvailable"];
    // }

    console.log(this.cartItems);
    console.log(this.shoppingData);
    
  }

  getCartItems(){
    return this.cartItems;
  }

  getCartItemsById(id: string){
    return this.cartItems[id];
  }

  deleteCartItem(id: string){
    // Delete the item from the cart
    delete this.cartItems[id];
    
    // Reset the Original Item Quantity
    this.shoppingData[id]['quantityAvailable'] = this.shoppingData[id]['totalQuantity'] 
  }

}
