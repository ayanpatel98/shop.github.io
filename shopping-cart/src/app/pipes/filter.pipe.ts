import { Pipe, PipeTransform } from '@angular/core';

// Filter the items based on the name ad categoy of the item
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tableData: any[], searchText: string): any[] {
    // Validations when there are no items or there is no search text
    if (!tableData) return [];
    if (!searchText) return tableData;

    // Preprocess the input string
    searchText = searchText.toLowerCase();

    // filter the items based on the name ot the category of the item
    return tableData.filter(item => {
      return item.name.toLowerCase().includes(searchText) || item.category.toLowerCase().includes(searchText);
    });
  }

}
