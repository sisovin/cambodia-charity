import { NextPage } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';

const Shop: NextPage = () => {
  const products = [
    { name: 'Product 1', price: 29.99, image: 'https://example.com/product1.jpg' },
    { name: 'Product 2', price: 49.99, image: 'https://example.com/product2.jpg' },
    { name: 'Product 3', price: 19.99, image: 'https://example.com/product3.jpg' },
  ];

  return (
    <div>
      <Header />
      <h1>Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <ProductCard key={index} name={product.name} price={product.price} image={product.image} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
