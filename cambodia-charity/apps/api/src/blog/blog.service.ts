import { Injectable } from '@nestjs/common';
import { PrismaService } from '@app/prisma/prisma.service';
import { BlogPost } from '@prisma/client';

@Injectable()
export class BlogService {
  constructor(private readonly prisma: PrismaService) {}

  async createPost(title: string, content: string): Promise<BlogPost> {
    return this.prisma.blogPost.create({
      data: {
        title,
        content,
      },
    });
  }

  async getPosts(): Promise<BlogPost[]> {
    return this.prisma.blogPost.findMany();
  }

  async getPostById(id: number): Promise<BlogPost | null> {
    return this.prisma.blogPost.findUnique({
      where: { id },
    });
  }

  async updatePost(id: number, title: string, content: string): Promise<BlogPost> {
    return this.prisma.blogPost.update({
      where: { id },
      data: {
        title,
        content,
      },
    });
  }

  async deletePost(id: number): Promise<BlogPost> {
    return this.prisma.blogPost.delete({
      where: { id },
    });
  }
}
