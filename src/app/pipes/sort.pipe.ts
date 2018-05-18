import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sortList'
})

export class SortPipe implements PipeTransform {

  transform(items: any, dirSort: string): any {



    if (dirSort === 'Up') {
      items.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
    }
    if (dirSort === 'Down') {
      items.sort(function (a, b) {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
        return 0;
      });
    }

    return items;

  }

}
