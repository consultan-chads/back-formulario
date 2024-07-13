import { Module } from '@nestjs/common';
import { BlogSect1Module } from './blog-sect1/blog-sect1.module';


@Module({
  imports: [BlogSect1Module],
  controllers: [],
  providers: [],
})
export class AppModule {}
