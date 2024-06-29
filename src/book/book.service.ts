import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book, BookDocument } from './schema/book.schema';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  create(createBookDto: CreateBookDto): Promise<Book> {
    const newBook = new this.bookModel();
    newBook.title = createBookDto.title;
    newBook.author = createBookDto.author;
    newBook.publish = createBookDto.publish;
    return newBook.save();
  }

  findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  findOne(id: string): Promise<Book> {
    return this.bookModel.findById(id).exec();
  }

  update(id: string, updateBookDto: UpdateBookDto) {
    return this.bookModel
      .updateOne(
        { _id: id },
        {
          title: updateBookDto.title,
          author: updateBookDto.author,
          publish: updateBookDto.publish,
        },
      )
      .exec();
  }

  async remove(id: string): Promise<boolean> {
    const result = await this.bookModel.deleteOne({ _id: id }).exec();
    return result.deletedCount > 0;
  }

  // remove(id: string) {
  //   // return `This is going to be removed ${id}`;
  //   return this.bookModel.deleteOne({ _id: id }).exec();
  // }
}
