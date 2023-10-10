import ThumbnailDownloader from '../components/ThumbnailDownloader';
import styles from '../styles/Home.module.css';
import React from 'react';
import Layout from '../components/Layout';
import AdBanner from '@/components/AdBanner';
import AtgScript from '@/components/adCash';

const IndexPage = () => {
  return (
    <>
      <Layout>
        <div className={styles.leftSide}>
          <AdBanner direction="left" keys="bd9ab2950991019c8cb06f82edc31734" />
        </div>
        <ThumbnailDownloader className={styles.container}/>
        <div className={styles.rightSide}>
          <AdBanner direction="right" keys="bd9ab2950991019c8cb06f82edc31734"/>
        </div>
      </Layout>
      <AtgScript/>
    </>
  );
};

export default IndexPage;
