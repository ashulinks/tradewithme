// pages/about.jsx
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h1>About TradeWithMe</h1>
        <p>We provide tools and insights to help traders succeed.</p>
      </main>
      <Footer />
    </>
  );
}
