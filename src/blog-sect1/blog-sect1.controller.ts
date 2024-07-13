import { Controller, Post, Body, } from '@nestjs/common';
import { BlogSect1Service } from './blog-sect1.service';
import { CreateBlogSect1Dto } from './dto/create-blog-sect1.dto';


@Controller('blog-sect1')
export class BlogSect1Controller {
  constructor(private readonly blogSect1Service: BlogSect1Service) { }

  @Post()
  create(@Body() createBlogSect1Dto: CreateBlogSect1Dto) {
    return this.blogSect1Service.create(createBlogSect1Dto);
  }

}
