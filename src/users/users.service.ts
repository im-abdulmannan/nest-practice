import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  public users: User[] = [
    {
      username: 'user1',
      password: 'user',
      email: 'user1@gmail.com',
    },
    {
      username: 'user2',
      password: 'user',
      email: 'user2@gamil.com',
    },
    {
      username: 'user3',
      password: 'user',
      email: 'user3@gmail.com',
    },
  ];

  getUserByName(username: string): User {
    return this.users.find((u) => u.username === username);
  }
}
