import { Controller, Get, Req, Res, Next } from '@nestjs/common';
import type { Request, Response, NextFunction } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    @Req() req: Request,
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    @Res({ passthrough: true }) res: Response,
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    @Next() next: NextFunction,
  ): string {
    return this.appService.getHello();
  }
}
