import { Pipe, PipeTransform } from '@angular/core';
import { User, Section } from '../models';

@Pipe({ name: 'checkSectionVisibility' })
export class CheckSectionVisibilityPipe implements PipeTransform {
  transform(sections: Section[], user: User, groupId: number): Section[] {
    const filtered = sections.filter(
      (section) =>
        section.isPublic ||
        user.groups?.find((group) => group.id === groupId)?.pivot.isMember
    );
    return filtered;
  }
}
