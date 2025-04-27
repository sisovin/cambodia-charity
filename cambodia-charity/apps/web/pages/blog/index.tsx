import { NextPage } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BlogPostCard from '../../components/BlogPostCard';

const Blog: NextPage = () => {
  const blogPosts = [
    { title: 'Blog Post 1', content: 'This is the content of blog post 1.', date: '2022-01-01' },
    { title: 'Blog Post 2', content: 'This is the content of blog post 2.', date: '2022-02-01' },
    { title: 'Blog Post 3', content: 'This is the content of blog post 3.', date: '2022-03-01' },
  ];

  return (
    <div>
      <Header />
      <h1>Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {blogPosts.map((post, index) => (
          <BlogPostCard key={index} title={post.title} content={post.content} date={post.date} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
