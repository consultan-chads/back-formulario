import { Injectable } from '@nestjs/common';
import { CreateBlogSect1Dto } from './dto/create-blog-sect1.dto';
import { UpdateBlogSect1Dto } from './dto/update-blog-sect1.dto';

@Injectable()
export class BlogSect1Service {
  create(createBlogSect1Dto: CreateBlogSect1Dto) {
    return 'This action adds a new blogSect1';
  }

  findAll() {
    return `This action returns all blogSect1`;
  }

  findOne(id: number) {
    return `This action returns a #${id} blogSect1`;
  }

  update(id: number, updateBlogSect1Dto: UpdateBlogSect1Dto) {
    return `This action updates a #${id} blogSect1`;
  }

  remove(id: number) {
    return `This action removes a #${id} blogSect1`;
  }
}
