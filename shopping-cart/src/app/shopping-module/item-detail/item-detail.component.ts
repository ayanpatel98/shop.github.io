import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DataService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnChanges {

  @Input() itemDetailId:any;
  
  // Child to Parent
  @Output() updateStock = new EventEmitter<boolean>();
  
  qtyAvailable: number = 0;
  itemDetail: any = {}
  
  constructor(private dataService: DataService) { }

  ngOnChanges(changes: SimpleChanges) {
    this.itemDetail = this.dataService.getDataById(this.itemDetailId);
    // this.qtyAvailable = this.itemDetail["quantityAvailable"];
  }
  

  addToCart(item: any){
    let desiredQty = Number((document.getElementById("qty") as HTMLInputElement).value);
    // if (desiredQty > this.qtyAvailable){
    if (desiredQty > item["quantityAvailable"]){
      window.alert("Not Enough Stock available!");
      return;
    }

    item["quantityAvailable"] -= desiredQty;
    item["orderQty"] += desiredQty;
    // item["quantityAvailable"] = this.qtyAvailable - desiredQty;
    
    this.dataService.addCartItems(item['id'], item);

    
    this.itemDetail = this.dataService.getDataById(this.itemDetailId);
    // this.qtyAvailable = this.itemDetail["quantityAvailable"];

    this.updateStock.emit(true);
  }

}
