import { useState } from 'react';
import styles from '../styles/Header.module.css';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>TradeWithMe</div>

      <nav className={`${styles.nav} ${open ? styles.open : ''}`}>
        <a href="/">Home</a>
        <a href="#BTC">BTC</a>
        <a href="#ETH">ETH</a>
        <a href="#XRP">XRP</a>
        <a href="#CRYPTO10">CRYPTO10</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>

      <div
        className={styles.hamburger}
        onClick={() => setOpen(!open)}
      >
        <div />
        <div />
        <div />
      </div>
    </header>
  );
}
