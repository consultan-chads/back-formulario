import { Module } from '@nestjs/common';
import { BlogSect1Service } from './blog-sect1.service';
import { BlogSect1Controller } from './blog-sect1.controller';

@Module({
  controllers: [BlogSect1Controller],
  providers: [BlogSect1Service],
})
export class BlogSect1Module {}
