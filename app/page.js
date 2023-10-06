import ThumbnailDownloader from '../components/ThumbnailDownloader';
import styles from '../styles/Home.module.css';
import React from 'react';
import Layout from '../components/Layout';
import AdBanner from '@/components/AdBanner';

const IndexPage = () => {
  return (
    <Layout>
      <div className={styles.leftSide}>
        <AdBanner direction="left" />
      </div>
      <ThumbnailDownloader className={styles.container}/>
      <div className={styles.rightSide}>
        <AdBanner direction="right" />
      </div>
    </Layout>
  );
};

export default IndexPage;
