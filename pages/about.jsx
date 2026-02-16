import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function About() {
  return (
    <>
      <div className={styles.container}>
      <Header />

      <section className={styles.hero}>
        <h1 className={styles.blackText}>About TradeWithMe</h1>
        <p className={styles.blackText}>We provide tools and insights to help traders succeed.</p>
      </section>

      <Footer />

      </div>
    </>
  );
}