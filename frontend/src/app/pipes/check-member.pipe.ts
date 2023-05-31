import { Pipe, PipeTransform } from '@angular/core';
import { GroupUser } from '../models';

@Pipe({ name: 'checkUserIsMember' })
export class CheckUserIsMemberPipe implements PipeTransform {
  transform(users: GroupUser[]): GroupUser[] {
    return users.filter((user) => user.pivot.isMember);
  }
}
