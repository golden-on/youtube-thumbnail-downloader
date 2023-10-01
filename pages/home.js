import ThumbnailDownloader from '../components/ThumbnailDownloader';
import styles from '../styles/Home.module.css';
import React from 'react';

const IndexPage = () => {
  return (
      <ThumbnailDownloader className={styles.container}/>
  );
};

export default IndexPage;