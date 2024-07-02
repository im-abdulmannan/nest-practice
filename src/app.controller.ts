import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getView(@Res() res: Response) {
    return res.render('index', { books: this.appService.getAllBooks() });
  }
}
