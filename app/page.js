import ThumbnailDownloader from '../components/ThumbnailDownloader';
import styles from '../styles/Home.module.css';
import React from 'react';
import Layout from '../components/Layout';
import AdBanner from '@/components/AdBanner';
import Script from 'next/script';

const IndexPage = () => {
  const atOptions = {
    key: 'fdc056ec88a9ae30c394fd62e5a2f255',
    format: 'iframe',
    height: 600,
    width: 160,
    params: {}
  };

  const scriptSrc = `//www.profitablecreativeformat.com/fdc056ec88a9ae30c394fd62e5a2f255/invoke.js?key=${atOptions.key}&format=${atOptions.format}&height=${atOptions.height}&width=${atOptions.width}`;
  return (
    <>
      <Layout>
        <div className={styles.leftSide}>
          <AdBanner direction="left" />
        </div>
        <ThumbnailDownloader className={styles.container}/>
        <div className={styles.rightSide}>
          <AdBanner direction="right" />
        </div>
      </Layout>
      <Script
        src={scriptSrc}
        strategy="afterInteractive"
      />
    </>
  );
};

export default IndexPage;
