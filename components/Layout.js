import React from 'react';
import styles from './Layout.module.css';
import Link from 'next/link';
import Footer from './Footer';
import { Analytics } from '@vercel/analytics/react';
const Layout = ({ children }) => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
        <Link href="/">
          <h1>YouTube Thumbnail Downloader</h1>
        </Link>
        </div>
        <ul className={styles.navLinks}>
          <li className={styles.navLink}>
            <Link href="/">
              Home
            </Link>
          </li>
          <li className={styles.navLink}>
            <Link href="/privacy-policy">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </nav>
      <main className={styles.pageContainer}>
        {children}
        <Analytics />
      </main>
      <Footer/>
    </>
  );
};

export default Layout;
