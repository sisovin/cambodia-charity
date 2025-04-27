import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const seed = async () => {
  const users = [
    { email: 'user1@example.com', name: 'User One' },
    { email: 'user2@example.com', name: 'User Two' },
  ];

  const donations = [
    { amount: 100, userId: 1 },
    { amount: 200, userId: 2 },
  ];

  const products = [
    { name: 'Product One', price: 10.0 },
    { name: 'Product Two', price: 20.0 },
  ];

  const orders = [
    { userId: 1, productId: 1, quantity: 2, totalPrice: 20.0 },
    { userId: 2, productId: 2, quantity: 1, totalPrice: 20.0 },
  ];

  const blogPosts = [
    { title: 'Blog Post One', content: 'Content for blog post one' },
    { title: 'Blog Post Two', content: 'Content for blog post two' },
  ];

  await prisma.user.createMany({ data: users });
  await prisma.donation.createMany({ data: donations });
  await prisma.product.createMany({ data: products });
  await prisma.order.createMany({ data: orders });
  await prisma.blogPost.createMany({ data: blogPosts });
};

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
