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
import { ParseIntPipe } from '../common/parse-int';
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
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.catsService.getOne(id);
  }

  @Post()
  @Header('Cache-control', 'no-store')
  create(@Body() createCatDto: CatDto) {
    return this.catsService.create(createCatDto);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateCatDto: CatDto) {
    return this.catsService.update(id, updateCatDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.catsService.remove(id);
  }
}
