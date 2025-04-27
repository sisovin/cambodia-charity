import Header from '../components/Header';
import Footer from '../components/Footer';
import DonationForm from '../components/DonationForm';

const Donation = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1>Donate to Cambodia Charity</h1>
        <p>Your generous donations help us provide essential resources and support to underprivileged communities in Cambodia. Every contribution makes a difference.</p>
        <DonationForm />
      </main>
      <Footer />
    </div>
  );
};

export default Donation;
