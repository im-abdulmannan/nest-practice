import { Injectable } from '@nestjs/common';
import { CONSTANTS } from 'src/constants';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  public users: User[] = [
    {
      username: 'user1',
      password: 'user',
      email: 'user1@gmail.com',
      age: 30,
      role: CONSTANTS.ROLES.ANDROID_DEVELOPER,
    },
    {
      username: 'user2',
      password: 'user',
      email: 'user2@gamil.com',
      age: 25,
      role: CONSTANTS.ROLES.WEB_DEVELOPER,
    },
    {
      username: 'user3',
      password: 'user',
      email: 'user3@gmail.com',
      age: 27,
      role: CONSTANTS.ROLES.ANDROID_DEVELOPER,
    },
  ];

  getUserByName(username: string): User {
    return this.users.find((u) => u.username === username);
  }
}
