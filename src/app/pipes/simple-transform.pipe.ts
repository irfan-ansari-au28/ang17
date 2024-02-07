import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'simpleTransform',
  standalone: true
})
export class SimpleTransformPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    return value.toUpperCase();
  }

}
