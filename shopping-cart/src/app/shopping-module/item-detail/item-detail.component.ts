import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ShoppingRecord } from 'src/app/model/shopping-cart.model';
import { DataService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnChanges {

  // Parent to Child
  @Input() itemDetailId:string = '';
  
  // Child to Parent
  @Output() updateStock = new EventEmitter<boolean>();
  
  qtyAvailable: number = 0;
  itemDetail: ShoppingRecord = {
    id: '',
    name: '',
    category: '',
    price: 0,
    quantityAvailable: 0,
    orderQty: 0,
    totalQuantity: 0
  };
  
  constructor(private dataService: DataService) { }

  ngOnChanges(changes: SimpleChanges) {
    this.itemDetail = this.dataService.getDataById(this.itemDetailId);
  }
  

  addToCart(item: ShoppingRecord){
    let desiredQty = Number((document.getElementById("qty") as HTMLInputElement).value);
    if (desiredQty > item["quantityAvailable"]){
      window.alert("Not Enough Stock available!");
      return;
    }

    item["quantityAvailable"] -= desiredQty;
    item["orderQty"] += desiredQty;
    
    this.dataService.addCartItems(item['id'], item);

    
    this.itemDetail = this.dataService.getDataById(this.itemDetailId);

    this.updateStock.emit(true);
  }

}
