import { Component, OnInit } from '@angular/core';
import { ShoppingRecord } from 'src/app/model/shopping-cart.model';
import { DataService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  tableData: ShoppingRecord[] = [];
  editable: boolean[] = [];
  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.tableData = Object.values(this.dataService.getCartItems())
  }

  editField(i: number) {
    this.editable[i] = true;
  }

  updateItem(item: ShoppingRecord, i: number){
    if(item['orderQty']>item['totalQuantity']){
      window.alert("Stock not available for the quantity entered.");
      return;
    }
    item['quantityAvailable'] = item['totalQuantity'] - item['orderQty'] 
    this.dataService.addCartItems(item['id'], item);
    this.editable[i] = false;
  }

  deleteItem(item: ShoppingRecord, idx: number){
    this.dataService.deleteCartItem(item['id']);
    // this.tableData = Object.values(this.dataService.getCartItems())
    this.tableData.splice(idx, 1);
  }
}
