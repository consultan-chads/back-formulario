import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BlogSect1Service } from './blog-sect1.service';
import { CreateBlogSect1Dto } from './dto/create-blog-sect1.dto';
import { UpdateBlogSect1Dto } from './dto/update-blog-sect1.dto';

@Controller('blog-sect1')
export class BlogSect1Controller {
  constructor(private readonly blogSect1Service: BlogSect1Service) {}

  @Post()
  create(@Body() createBlogSect1Dto: CreateBlogSect1Dto) {
    return this.blogSect1Service.create(createBlogSect1Dto);
  }

  @Get()
  findAll() {
    return this.blogSect1Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blogSect1Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlogSect1Dto: UpdateBlogSect1Dto) {
    return this.blogSect1Service.update(+id, updateBlogSect1Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blogSect1Service.remove(+id);
  }
}
