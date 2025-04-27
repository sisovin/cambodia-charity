import Header from '../components/Header';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <Header />
      <main className="container mx-auto p-4">
        <h1>About Cambodia Charity</h1>
        <p>
          Cambodia Charity is a non-profit organization dedicated to improving the lives of
          underprivileged communities in Cambodia. Our mission is to provide education, healthcare,
          and essential resources to those in need.
        </p>
        <p>
          We believe in the power of community and strive to create sustainable solutions that
          empower individuals and families to build a better future. Through our various programs
          and initiatives, we aim to make a lasting impact on the lives of those we serve.
        </p>
        <p>
          Join us in our mission to create positive change and support the people of Cambodia. Your
          contributions and involvement can make a significant difference in the lives of many.
        </p>
      </main>
      <Footer />
    </Layout>
  );
};

export default About;
