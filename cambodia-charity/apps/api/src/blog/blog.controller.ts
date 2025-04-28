import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogPost } from '@prisma/client';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post()
  async createPost(@Body('title') title: string, @Body('content') content: string): Promise<BlogPost> {
    return this.blogService.createPost(title, content);
  }

  @Get()
  async getPosts(): Promise<BlogPost[]> {
    return this.blogService.getPosts();
  }

  @Get(':id')
  async getPostById(@Param('id') id: number): Promise<BlogPost | null> {
    return this.blogService.getPostById(id);
  }

  @Put(':id')
  async updatePost(@Param('id') id: number, @Body('title') title: string, @Body('content') content: string): Promise<BlogPost> {
    return this.blogService.updatePost(id, title, content);
  }

  @Delete(':id')
  async deletePost(@Param('id') id: number): Promise<BlogPost> {
    return this.blogService.deletePost(id);
  }
}
