import { PartialType } from '@nestjs/mapped-types';
import { CreateBlogSect1Dto } from './create-blog-sect1.dto';

export class UpdateBlogSect1Dto extends PartialType(CreateBlogSect1Dto) {}
