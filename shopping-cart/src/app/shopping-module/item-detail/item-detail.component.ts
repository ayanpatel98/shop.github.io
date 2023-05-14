import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ShoppingRecord } from 'src/app/model/shopping-cart.model';
import { DataService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnChanges {
  // Declaration and Initialization
  // To get the item detail id from the parent Home component
  @Input() itemDetailId: string = '';

  // To send the event to the parent Home component
  @Output() updateStock = new EventEmitter<boolean>();

  // Entered quantity value
  selectedQty: number = 1;
  // default table record
  itemDetail: ShoppingRecord = {
    id: '',
    name: '',
    category: '',
    price: NaN,
    quantityAvailable: NaN,
    orderQty: NaN,
    totalQuantity: NaN,
    description: '',
  };

  constructor(
    private dataService: DataService  // Data Service
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    // Get the item details based on the item id
    this.itemDetail = this.dataService.getDataById(this.itemDetailId);
  }


  /**
 * Adds the item to the cart based on the available quantity
 * Updates the relevant quantity and emits the event to the parent Home component
 *
 * @param {ShoppingRecord} item The whole item record
 * @return None
 */
  addToCart(item: ShoppingRecord) {
    // Entered Quantity
    let desiredQty = Number((document.getElementById("qty") as HTMLInputElement).value);
    // Validation of the quantity
    if (desiredQty > item["quantityAvailable"]) {
      window.alert("Not Enough Stock available!");
      return;
    }

    // Update the quantities
    item["quantityAvailable"] -= desiredQty;
    item["orderQty"] += desiredQty;

    // Updates the cart data item of current id
    this.dataService.addCartItems(item['id'], item);

    // Update the item record from the updated service data
    this.itemDetail = this.dataService.getDataById(this.itemDetailId);

    // Notify the parent Home component of the changes done
    this.updateStock.emit(true);
  }

}
