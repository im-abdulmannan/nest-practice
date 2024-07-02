import { Injectable } from '@nestjs/common';
import { BookModel } from './book.model';

@Injectable()
export class AppService {
  public books: BookModel[] = [
    { title: 'Harry Potter', author: 'James', publish: 2017 },
    { title: 'Batman', author: 'John Doe', publish: 2012 },
    { title: 'Meejo', author: 'Alan Walker', publish: 2013 },
  ];

  getAllBooks(): BookModel[] {
    return this.books;
  }

  getHello(): string {
    return 'hello, world!';
  }
}
