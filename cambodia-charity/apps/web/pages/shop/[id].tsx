import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';

const ProductDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const product = {
    name: 'Product 1',
    price: 29.99,
    image: 'https://example.com/product1.jpg',
  };

  return (
    <div>
      <Header />
      <h1>Product Detail</h1>
      <ProductCard name={product.name} price={product.price} image={product.image} />
      <Footer />
    </div>
  );
};

export default ProductDetail;
