import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe that capitalizes the first character of string.
 */
@Pipe({name: 'capitalize'})
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    if (value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
    return value;
  }
}
