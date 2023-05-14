import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/service/data-service.service';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tableData: any[] = [];
  itemDetailId: any;
  sortBool: boolean = false;
  searchText: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.tableData = Object.values(this.dataService.getData());
  }

  getDetails(itemId: any){
    this.itemDetailId = itemId;
  }

  updateStock(event: boolean){
    this.tableData = Object.values(this.dataService.getData());
  }

  sortTable(colName: string, sortBoolVal: boolean){
    if (sortBoolVal == true){
        this.tableData.sort((a, b) => a[colName] < b[colName] ? 1 : a[colName] > b[colName] ? -1 : 0)
        this.sortBool = !this.sortBool
    }
    else{
        this.tableData.sort((a, b) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0)
        this.sortBool = !this.sortBool
    }
    
  }
}
