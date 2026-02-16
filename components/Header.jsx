import { useState } from 'react';
import styles from '../styles/Header.module.css';
import Link from 'next/link';


export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>TradeWithMe</div>

      <nav className={`${styles.nav} ${open ? styles.open : ''}`}>
      <Link href="/">Home</Link>

      {/* Hash links to homepage sections */}
      <Link href="/#BTC">BTC</Link>
      <Link href="/#ETH">ETH</Link>
      <Link href="/#XRP">XRP</Link>
      <Link href="/#CRYPTO10">CRYPTO10</Link>

      {/* Other pages */}
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
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
