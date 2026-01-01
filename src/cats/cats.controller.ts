import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
  Body,
  HttpCode,
  Header,
} from '@nestjs/common';
import { ListAllEntities, CreateCatDto, UpdateCatDto } from './cats.dto';

@Controller('cats')
export class CatsController {
  @Get()
  getAll(@Query() query: ListAllEntities) {
    return `This action returns all cats (limit: ${query.limit} items)`;
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Post()
  @Header('Cache-control', 'no-store')
  create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
