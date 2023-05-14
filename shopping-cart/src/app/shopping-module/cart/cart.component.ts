import { Component, OnInit } from '@angular/core';
import { ShoppingRecord } from 'src/app/model/shopping-cart.model';
import { DataService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // Declaration and Initialization
  // All Cart Data array : interface ShoppingRecord
  cartData: ShoppingRecord[] = [];
  // Edit the order quantity field in the table
  editable: boolean[] = [];
  title: string = '';

  constructor(
    private dataService: DataService // Data service
  ) { }

  ngOnInit(): void {
    // Get the card data from the dataService
    this.cartData = Object.values(this.dataService.getCartItems());
    // Title based on the cart data
    this.title = this.cartData.length > 0 ? 'Cart Details:' : 'Cart is Empty!!';
  }

  /**
 * Enables the input field to enter the quantity of the item which is mapped to the index i
 *
 * @param {number} i Index of the item
 * @return None
 */
  editField(i: number) {
    this.editable[i] = true;
  }

  /**
 * Updates the available quantity of the item in the cart items of the data service
 * and in the main shoppingData
 *
 * @param {ShoppingRecord} item The whole item record
 * @param {number} i Index of the item in the table
 * @return None
 */
  updateItem(item: ShoppingRecord, i: number) {
    // Validation for the entered quantity
    if (item['orderQty'] > item['totalQuantity']) {
      window.alert("Stock not available for the quantity entered.");
      return;
    }
    // Update the available quantity
    item['quantityAvailable'] = item['totalQuantity'] - item['orderQty']
    // add/Update the item to the cart data
    this.dataService.addCartItems(item['id'], item);
    this.editable[i] = false; // Disable the quantity input field
  }

  /**
 * Deletes the item from the shopping cart data in the service and
 * deletes the item from the cart table in the cart component based on the index
 *
 * @param {ShoppingRecord} item The whole item record
 * @param {number} idx Index of the item in the table
 * @return None
 */
  deleteItem(item: ShoppingRecord, idx: number) {
    this.dataService.deleteCartItem(item['id']);
    this.cartData.splice(idx, 1);
    this.title = this.cartData.length > 0 ? 'Cart Details:' : 'Cart is Empty!!';
  }
}
