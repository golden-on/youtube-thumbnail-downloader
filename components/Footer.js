// components/Footer.js
import React from 'react';
import styles from './Footer.module.css'; // Import the CSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; 2023 YouTube Thumbnail Downloader</p>
        <p><a href="/terms-of-service">Terms of Service</a></p>
      </div>
    </footer>
  );
};

export default Footer;
