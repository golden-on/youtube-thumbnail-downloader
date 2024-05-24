import AdBanner from '@/components/AdBanner';
import AtgScript from '@/components/adCash';
import Layout from '../components/Layout';
import ThumbnailDownloader from '../components/ThumbnailDownloader';
import styles from '../styles/Home.module.css';

const IndexPage = () => {
  return (
    <>
      <Layout>
        <div className={styles.leftSide}>
          <AdBanner direction="left" keys="c7668cd160769b6c8115e340a7bfe179" />
        </div>
        <ThumbnailDownloader className={styles.container}/>
        <div className={styles.rightSide}>
          <AdBanner direction="right" keys="c7668cd160769b6c8115e340a7bfe179"/>
        </div>
      </Layout>
      <AtgScript/>
    </>
  );
};

export default IndexPage;
