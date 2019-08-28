import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'descriptionString'
})
export class DescriptionString implements PipeTransform {
    transform(value: string, size: number): string {

      if (value.length > size) {
        return `${value.substr(0, size)}...`;
      }

      return `${value.substr(0, size)}`;
    }
}
