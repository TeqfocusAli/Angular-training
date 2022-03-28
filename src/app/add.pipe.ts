import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'add',
})
export class AddPipe implements PipeTransform {
  transform(value: number, ...args: number[]): number {
    const valueToAdd1 = args[0];
    const valueToAdd2 = args[1];
    return value + valueToAdd1 + valueToAdd2;
  }
}
