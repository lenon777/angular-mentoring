import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
    if (value >= 60) {
        return (value / 60 | 0) + 'h ' + value % 60 + ' min';

    }

        return value+ ' min';
}

}
