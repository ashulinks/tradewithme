import { useState, useEffect } from 'react';
import styles from '../styles/Header.module.css';
import Link from 'next/link';


export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>TradeWithMe</div>

      {/* Hamburger button */}
      <button
        className={styles.hamburger} onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation menu */}
      

<nav className={`${styles.nav} ${open ? styles.open : ''}`}>
  <Link href="/" onClick={() => setOpen(false)}>Home</Link>
  <Link href="/#BTC" onClick={() => setOpen(false)}>BTC</Link>
  <Link href="/#ETH" onClick={() => setOpen(false)}>ETH</Link>
  <Link href="/#XRP" onClick={() => setOpen(false)}>XRP</Link>
  <Link href="/#CRYPTO10" onClick={() => setOpen(false)}>CRYPTO10</Link>
  <Link href="/about" onClick={() => setOpen(false)}>About</Link>
  <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
</nav>


    </header>
  );
}
