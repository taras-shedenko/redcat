import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
  Header,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatDto } from './cats.dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  getAll() {
    return this.catsService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.catsService.getOne(parseInt(id));
  }

  @Post()
  @Header('Cache-control', 'no-store')
  create(@Body() createCatDto: CatDto) {
    return this.catsService.create(createCatDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: CatDto) {
    return this.catsService.update(parseInt(id), updateCatDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.catsService.remove(parseInt(id));
  }
}
