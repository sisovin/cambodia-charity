import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { BlogPost } from './blogPost.entity';
import { Comment } from './comment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BlogPost, Comment])],
  providers: [BlogService],
  controllers: [BlogController],
})
export class BlogModule {}
