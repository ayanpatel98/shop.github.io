import { Component, OnInit } from '@angular/core';
import { ShoppingRecord } from 'src/app/model/shopping-cart.model';
import { DataService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Declaration and Initialization
  // All Items Data array : interface ShoppingRecord
  itemsData: ShoppingRecord[] = [];
  // Sorting Reverser
  sortBool: boolean = false;
  // Item Id
  itemDetailId: string = '';
  // Search field value
  searchText: string = '';

  constructor(
    private dataService: DataService // Data service
  ) { }

  ngOnInit(): void {
    // Populate all the items in the item listing table
    this.itemsData = Object.values(this.dataService.getData());
  }

  /**
 * Sets the itemDetailsId for passing it to the child ItemDetail component
 * for fetching the item details based on it
 *
 * @param {string} itemId Item id string
 * @return None
 */
  setItemId(itemId: string) {
    this.itemDetailId = itemId;
  }

  /**
 * Updates the items after receiving the event from the event emitter from the child component
 *
 * @param {boolean} event boolean event
 * @return None
 */
  updateStock(event: boolean) {
    this.itemsData = Object.values(this.dataService.getData());
  }

  /**
 * Updates the items in a particular sorted order based on the sortBoolVal
 * Sorts in ascending and descending order
 *
 * @param {string} colName column Name string
 * @param {boolean} sortBoolVal boolean sorting reverser
 * @return None
 */
  sortTable(colName: string, sortBoolVal: boolean) {
    if (sortBoolVal == true) {
      this.itemsData.sort((a, b) => a[colName as keyof ShoppingRecord] < b[colName as keyof ShoppingRecord] ? 1 : a[colName as keyof ShoppingRecord] > b[colName as keyof ShoppingRecord] ? -1 : 0)
      this.sortBool = !this.sortBool
    }
    else {
      this.itemsData.sort((a, b) => a[colName as keyof ShoppingRecord] > b[colName as keyof ShoppingRecord] ? 1 : a[colName as keyof ShoppingRecord] < b[colName as keyof ShoppingRecord] ? -1 : 0)
      this.sortBool = !this.sortBool
    }

  }
}
