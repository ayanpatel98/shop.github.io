import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tableData: any[], searchText: string): any[] {
    if (!tableData) return [];
    if (!searchText) return tableData;

    searchText = searchText.toLowerCase();

    return tableData.filter(item => {
      return item.name.toLowerCase().includes(searchText) || item.category.toLowerCase().includes(searchText);
    });
  }

}
