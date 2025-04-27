import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BlogPostCard from '../../components/BlogPostCard';

const BlogPost: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState<{ title: string; content: string; date: string } | null>(null);

  useEffect(() => {
    if (slug) {
      // Fetch blog post details based on the slug
      const fetchPost = async () => {
        const response = await fetch(`/api/blog/${slug}`);
        const data = await response.json();
        setPost(data);
      };

      fetchPost();
    }
  }, [slug]);

  return (
    <div>
      <Header />
      {post ? (
        <BlogPostCard title={post.title} content={post.content} date={post.date} />
      ) : (
        <p>Loading...</p>
      )}
      <Footer />
    </div>
  );
};

export default BlogPost;
