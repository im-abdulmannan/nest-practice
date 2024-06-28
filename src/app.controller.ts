import { Controller, Get } from '@nestjs/common';

@Controller('app')
export class AppController {
  constructor() {}

  @Get('/login')
  helloWorld(): string {
    return 'Hello World!';
  }
}
