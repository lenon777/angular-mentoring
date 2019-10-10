import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    value.sort((a: any, b: any) => {
      return a.creationDate < b.creationDate ? -1 : 0;
    })
    return value;
  }

}
