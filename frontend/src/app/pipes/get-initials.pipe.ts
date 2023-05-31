import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'getInitials' })
export class GetInitialsPipe implements PipeTransform {
  transform(name: string): string {
    return name
      .split(' ')
      .map((word) => word[0].toUpperCase())
      .join('');
  }
}
