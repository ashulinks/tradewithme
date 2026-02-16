import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Contact() {
  return (
    <>
      <div className={styles.container}>
      <Header />

      <section className={styles.hero}>
        <h1 className={styles.blackText}>Contact us</h1>
        <p className={styles.blackText}>Email us at support@tradewithme.online</p>
      </section>

      <Footer />

      </div>
    </>
  );
}