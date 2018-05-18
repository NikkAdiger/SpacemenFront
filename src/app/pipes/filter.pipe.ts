import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterName'
})

export class FilterPipe implements PipeTransform {

  transform(items: any, value: string): any {
    if (items === 0 || value === '') {
      return items;
    }

    return items.filter((el) => {
      // return el.name.toLowerCase().substr(0, value.length).indexOf(value.toLowerCase()) !== -1;
      return el.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });
  }
}
