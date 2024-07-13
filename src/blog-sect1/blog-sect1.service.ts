import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateBlogSect1Dto } from './dto/create-blog-sect1.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlogSect1 } from './entities/blog-sect1.entity';


@Injectable()
export class BlogSect1Service {

  private readonly logger = new Logger('UserFormInfo') // * esto permite mostrar los errores mas claramente en la terminal 


  constructor(

    @InjectRepository(BlogSect1)
    private readonly blogRepository: Repository<BlogSect1>

  ) { }

  /////////////////////////////////////////////////////////////////

  async create(createBlogSect1Dto: CreateBlogSect1Dto) {

    try {
      const BlogSect1C = createBlogSect1Dto

      const UserForm = this.blogRepository.create(
        {
          ...BlogSect1C,
        });
      await this.blogRepository.save(UserForm); // esto lo guarda en la base de datos 

      return UserForm;
    } catch (error) {
      this.handleDBExceptions(error);
    }


  }




  ////////////////////////////////////////////////////
  private handleDBExceptions(error: any): void {
    //* toda esta funcion de handleDBExceptions es para mostrar el erro mas en especifico 

    if (error.code === '23505')
      throw new BadRequestException(error.detail);

    this.logger.error(error); //* aca se llama a los errores mas limpios de la consola se puede usar en todo el archivo de service 
    throw new InternalServerErrorException('Unexpected error,check server logs')

  }



}
