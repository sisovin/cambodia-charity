import { NextPage } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DonationForm from '../components/DonationForm';
import ProductCard from '../components/ProductCard';
import BlogPostCard from '../components/BlogPostCard';

const Home: NextPage = () => {
  const products = [
    { name: 'Product 1', price: 29.99, image: 'https://example.com/product1.jpg' },
    { name: 'Product 2', price: 49.99, image: 'https://example.com/product2.jpg' },
    { name: 'Product 3', price: 19.99, image: 'https://example.com/product3.jpg' },
  ];

  const blogPosts = [
    { title: 'Blog Post 1', content: 'This is the content of blog post 1.', date: '2022-01-01' },
    { title: 'Blog Post 2', content: 'This is the content of blog post 2.', date: '2022-02-01' },
    { title: 'Blog Post 3', content: 'This is the content of blog post 3.', date: '2022-03-01' },
  ];

  return (
    <div>
      <Header />
      <h1>Welcome to Cambodia Charity</h1>
      <p>This is the homepage of the Cambodia Charity project.</p>
      <DonationForm />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <ProductCard key={index} name={product.name} price={product.price} image={product.image} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {blogPosts.map((post, index) => (
          <BlogPostCard key={index} title={post.title} content={post.content} date={post.date} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
