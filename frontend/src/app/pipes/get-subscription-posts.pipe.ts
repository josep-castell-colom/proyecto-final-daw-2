import { Pipe, PipeTransform } from '@angular/core';
import { Group, Post } from '../models';

@Pipe({ name: 'getSubscriptionPosts' })
export class GetSubscriptionPostsPipe implements PipeTransform {
  transform(group: Group): Post[] {
    const posts: Post[] = [];
    group.sections
      .filter((section) => section.isPublic)
      .map((section) => {
        section.posts.forEach((post) => posts.push(post));
      });
    return posts;
  }
}
