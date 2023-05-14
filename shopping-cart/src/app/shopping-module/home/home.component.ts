import { Component, OnInit } from '@angular/core';
import { ShoppingRecord } from 'src/app/model/shopping-cart.model';
import { DataService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tableData: ShoppingRecord[] = [];
  sortBool: boolean = false;
  itemDetailId: string = '';
  searchText: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.tableData = Object.values(this.dataService.getData());
  }

  getDetails(itemId: string){
    this.itemDetailId = itemId;
  }

  updateStock(event: boolean){
    this.tableData = Object.values(this.dataService.getData());
  }

  sortTable(colName: string, sortBoolVal: boolean){
    if (sortBoolVal == true){
        this.tableData.sort((a, b) => a[colName as keyof ShoppingRecord] < b[colName as keyof ShoppingRecord] ? 1 : a[colName as keyof ShoppingRecord] > b[colName as keyof ShoppingRecord] ? -1 : 0)
        this.sortBool = !this.sortBool
    }
    else{
        this.tableData.sort((a, b) => a[colName as keyof ShoppingRecord] > b[colName as keyof ShoppingRecord] ? 1 : a[colName as keyof ShoppingRecord] < b[colName as keyof ShoppingRecord] ? -1 : 0)
        this.sortBool = !this.sortBool
    }
    
  }
}
