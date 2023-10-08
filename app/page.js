import ThumbnailDownloader from '../components/ThumbnailDownloader';
import styles from '../styles/Home.module.css';
import React from 'react';
import Layout from '../components/Layout';
import AdBanner from '@/components/AdBanner';

const IndexPage = () => {
  return (
    <Layout>
      <div className={styles.leftSide}>
        <AdBanner direction="left" keys="fdc056ec88a9ae30c394fd62e5a2f255" />
      </div>
      <ThumbnailDownloader className={styles.container}/>
      <div className={styles.rightSide}>
        <AdBanner direction="right" keys="fdc056ec88a9ae30c394fd62e5a2f255"/>
      </div>
    </Layout>
  );
};

export default IndexPage;
