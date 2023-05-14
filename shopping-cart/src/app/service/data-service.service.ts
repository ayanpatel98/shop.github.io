import { Injectable } from '@angular/core';
import { ShoppingRecord } from '../model/shopping-cart.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Declaration and Initialization
  // All items Data Dictionary
  private shoppingData: { [id: string]: ShoppingRecord } = {
    'a1': { id: 'a1', name: "Apple MacBook Pro", category: "Electronics", price: 1299, quantityAvailable: 10, orderQty: 0, totalQuantity: 10, description: "13-inch M1 Chip with 8-core CPU and 8-core GPU, 8GB RAM, 256GB SSD" },
    'b1': { id: 'b1', name: "Samsung Galaxy S21 Ultra 5G", category: "Electronics", price: 999, quantityAvailable: 15, orderQty: 0, totalQuantity: 15, description: "6.8-inch Quad HD+ Dynamic AMOLED 2X, 12GB RAM, 128GB storage, 108MP camera" },
    'c1': { id: 'c1', name: "Levi's 501 Original Fit Jeans", category: "Clothing", price: 69, quantityAvailable: 20, orderQty: 0, totalQuantity: 20, description: "Button fly, straight leg, 100% cotton, mid rise" },
    'd1': { id: 'd1', name: "Nike Air Force 1 '07", category: "Shoes", price: 90, quantityAvailable: 25, orderQty: 0, totalQuantity: 25, description: "Low-top leather sneaker, padded collar and tongue, rubber sole" },
    'e1': { id: 'e1', name: "AmazonBasics Hardside Spinner Suitcase", category: "Travel", price: 60, quantityAvailable: 12, orderQty: 0, totalQuantity: 12, description: "20-inch carry-on, scratch-resistant exterior, 3 zippered pockets, telescoping handle" },
    'f1': { id: 'f1', name: "Samsonite Winfield 2 Hardside Luggage", category: "Travel", price: 139, quantityAvailable: 8, orderQty: 0, totalQuantity: 8, description: "28-inch checked bag, durable polycarbonate shell, 4 multi-directional spinner wheels" },
    'g1': { id: 'g1', name: "GoPro HERO9 Black", category: "Electronics", price: 449, quantityAvailable: 6, orderQty: 0, totalQuantity: 6, description: "5K video, 20MP photos, HyperSmooth 3.0 stabilization, waterproof up to 33ft" },
    'h1': { id: 'h1', name: "Columbia Women's Benton Springs Full Zip Fleece Jacket", category: "Clothing", price: 60, quantityAvailable: 18, orderQty: 0, totalQuantity: 18, description: "Soft and warm fleece jacket, full-zip front, stand-up collar, zippered hand pockets" },
    'i1': { id: 'i1', name: "Beats Solo3 Wireless On-Ear Headphones", category: "Electronics", price: 179, quantityAvailable: 7, orderQty: 0, totalQuantity: 7, description: "Bluetooth connectivity, up to 40 hours of battery life, adjustable fit" },
    'j1': { id: 'j1', name: "Lululemon Align Pant II", category: "Athletic Wear", price: 98, quantityAvailable: 30, orderQty: 0, totalQuantity: 30, description: "High-rise, buttery soft, sweat-wicking fabric, available in multiple colors and lengths" },
    'k1': { id: 'k1', name: "Samsung 55-inch QLED Q70T Series TV", category: "Electronics", price: 999, quantityAvailable: 8, orderQty: 0, totalQuantity: 8, description: "4K UHD, Quantum Processor 4K, Dual LED, Alexa Built-In" },
    'l1': { id: 'l1', name: "Adidas Men's Ultraboost 21 Running Shoes", category: "Shoes", price: 180, quantityAvailable: 12, orderQty: 0, totalQuantity: 12, description: "Boost cushioning, Primeblue upper made with recycled materials, stretchweb outsole" },
    'm1': { id: 'm1', name: "Zara Women's Blazer with Pockets", category: "Clothing", price: 69, quantityAvailable: 15, orderQty: 0, totalQuantity: 15, description: "Structured blazer with lapel collar, long sleeves, and front pockets" },
    'n1': { id: 'n1', name: "The North Face Borealis Backpack", category: "Travel", price: 89, quantityAvailable: 20, orderQty: 0, totalQuantity: 20, description: "28-liter capacity, FlexVent suspension system, padded laptop sleeve, reflective details" },
    'o1': { id: 'o1', name: "Fitbit Versa 3 Smartwatch", category: "Electronics", price: 229, quantityAvailable: 9, orderQty: 0, totalQuantity: 9, description: "Built-in GPS, Active Zone Minutes, heart rate tracking, voice assistant" },
    'p1': { id: 'p1', name: "Away The Bigger Carry-On", category: "Travel", price: 245, quantityAvailable: 7, orderQty: 0, totalQuantity: 7, description: "Premium polycarbonate shell, ejectable battery, interior compression system, 360° spinner wheels" },
    'q1': { id: 'q1', name: "Bose QuietComfort 35 II Wireless Headphones", category: "Electronics", price: 299, quantityAvailable: 11, orderQty: 0, totalQuantity: 11, description: "Noise-cancelling, Alexa-enabled, up to 20 hours of battery life, comfortable over-ear design" },
    'r1': { id: 'r1', name: "Uniqlo Women's Ultra Light Down Jacket", category: "Clothing", price: 69, quantityAvailable: 25, orderQty: 0, totalQuantity: 25, description: "Packable and lightweight, water-repellent coating, made with responsibly sourced down" },
    's1': { id: 's1', name: "Adidas Men's Tiro 21 Training Pants", category: "Athletic We'r", price: 45, quantityAvailable: 20, orderQty: 0, totalQuantity: 20, description: "Moisture-wicking fabric, zip pockets, ankle zips for easy on and off" },
    't1': { id: 't1', name: "Sony WH-1000XM4 Wireless Noise-Cancelling Headphones", category: "Electronics", price: 349, quantityAvailable: 6, orderQty: 0, totalQuantity: 6, description: "Industry-leading noise cancellation, up to 30 hours of battery life, touch controls, speak-to-chat" },
  }

  // All cart items dictionary
  private cartItems: { [id: string]: ShoppingRecord } = {}

  constructor() { }

  /**
   * Returns the dictionary data of all the shoppingData items pre-defined
   *
   * @return {[id: string] : ShoppingRecord} shoppingData All items dictionary
   */
  getData() {
    return this.shoppingData;
  }

  /**
   * Returns the item record with a particular ID
   *
   * @param {string} id ID of the item
   * @return {ShoppingRecord} Item record Object
   */
  getDataById(id: string) {
    return this.shoppingData[id];
  }

  /**
   * Adds/Updates the item record in the all items shopping data
   * based on the item id
   *
   * @param {string} id Index of the item
   * @param {ShoppingRecord} data Item record Object
   * @return None
   */
  setData(id: string, data: ShoppingRecord) {
    this.shoppingData[id] = data;
  }

  /**
  * Adds/Updates the item record in the cart data
  * based on the item id
  *
  * @param {string} id Index of the item
  * @param {ShoppingRecord} data Item record Object
  * @return None
  */
  addCartItems(id: string, data: ShoppingRecord) {
    // Update the cart datasource
    this.cartItems[id] = data;
    // Update the main shoppingData datasource
    this.setData(id, data);
  }

  /**
   * Returns the dictionary data of all the cart items
   *
   * @return {[id: string] : ShoppingRecord} shoppingData All items dictionary
   */
  getCartItems() {
    return this.cartItems;
  }

  /**
   * Returns the item record with a particular ID from the cart data
   *
   * @param {string} id ID of the item
   * @return {ShoppingRecord} Item record Object
   */
  getCartItemsById(id: string) {
    return this.cartItems[id];
  }

  /**
   * Delete the item record with a particular ID from the cart data
   *
   * @param {string} id ID of the item
   * @return {ShoppingRecord} Item record Object
   */
  deleteCartItem(id: string) {
    // Delete the item from the cart
    delete this.cartItems[id];

    // Reset the Original Item Quantity in the shopping data dictionary
    this.shoppingData[id]['quantityAvailable'] = this.shoppingData[id]['totalQuantity']
  }

}
