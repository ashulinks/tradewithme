import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.fadeInVisible);
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className={styles.container}>
      
      <Header />

      <section className={styles.hero} style={{ background: 'url(/main.png) center/cover no-repeat' }}>
        <h1 className={styles.blackText}>Welcome to TradeWithMe</h1>
        <p className={styles.blackText}>Your professional trading companion for smarter decisions.</p>
      </section>

      {/* Product Sections */}
      <section ref={el => (sectionsRef.current[0] = el)} id="BTC" className={`${styles.productSection} ${styles.fadeIn}`} style={{ background: 'url(/btc.jpg) center/cover no-repeat', color: '#fff' }}>
        <h2 className={styles.blackText}>Bitcoin</h2>
        <p className={styles.blackText}>Bitcoin Daily and Weekly Swing Trading</p>
      </section>

       <section ref={el => (sectionsRef.current[1] = el)} id="ETH" className={`${styles.productSection} ${styles.fadeIn}`} style={{ background: 'url(/eth.jpg) center/cover no-repeat', color: '#fff' }}>
        <h2 className={styles.blackText}>Ethereum</h2>
        <p className={styles.blackText}>Ethereum Daily and Weekly Swing Trading</p>
      </section>

      <section ref={el => (sectionsRef.current[2] = el)} id="XRP" className={`${styles.productSection} ${styles.fadeIn}`} style={{ background: 'url(/xrp.jpg) center/cover no-repeat', color: '#fff' }}>
        <h2 className={styles.blackText}>Ripple</h2>
        <p className={styles.blackText}>Ripple Daily and Weekly Swing Trading</p>
      </section>

      <section ref={el => (sectionsRef.current[3] = el)} id="CRYPTO10" className={`${styles.productSection} ${styles.fadeIn}`} style={{ background: 'url(/crypto10.jpg) center/cover no-repeat', color: '#fff' }}>
        <h2 className={styles.blackText}>Crypto 10 Index</h2>
        <p className={styles.blackText}>Crypto10 Daily and Weekly Swing Trading</p>
      </section>

      <section className={styles.products}>
        <div className={styles.card}>BTC</div>
        <div className={styles.card}>ETH</div>
        <div className={styles.card}>XRP</div>
        <div className={styles.card}>CRYPTO10</div>
      </section>

      <Footer />
      
      </div>
    </>
  );
}
